import {
  Result,
} from './result';
import {
  FinishedSet,
} from './finished-set';
import {
  Task,
} from './task';
import {
  ResultSet,
} from './result-set';
import {
  ValidationResult,
} from './validation-result';
import {
  Logger,
} from './logger/logger';
import Reporter from './reporter/reporter';
import * as Progress from 'cli-progress';
import validateTasks from './validate-tasks';

const EMPTY = 0;

export interface WorkerConstructor {
  new(path: string);
}
type Event = 'message';
export interface Thread {
  terminate: () => void;
  postMessage: (param: unknown) => void;
  on: (
    event: Event,
    handler: (message: unknown) => void
  ) => void;
}

/* eslint max-params:0 */
const executor = (
  threads: number,
  repetitions: number,
  tasks: Array<Task>,
  resultHandler: Reporter,
  logger: Logger,
  Worker: WorkerConstructor,
): void => {
  validateTasks(repetitions, threads, tasks,);
  const validator: Thread = new Worker('./worker/validator.js',);
  const calculator: Thread = new Worker('./worker/calculator.js',);
  const bar = new Progress.SingleBar({
    stopOnComplete: true,
    clearOnComplete: true,
  },);
  let active = 0;
  let checking = 0;
  let analysing = 0;
  const workers: Array<Thread> = [];
  const results: {[z: string]: ResultSet} = {};
  const finished: {[z: string]: FinishedSet} = {};
  const internalTasks = [];
  logger.debug(
    'initializing tasks to have '+
   `${ threads } Threads x ${ repetitions } Repetitions todos`,
  );
  for (const task of tasks) {
    for (let i=0; i<threads*repetitions; i ++) {
      internalTasks.push(task,);
    }
  }
  bar.start(internalTasks.length + internalTasks.length + tasks.length, EMPTY,);
  calculator.on('message', (data: FinishedSet,) => {
    finished[data.id] = data;
    logger.debug(`Analyzation of ${ data.id } finished`,);
    analysing --;
    bar.increment();
    if (active === EMPTY && checking === EMPTY && analysing === EMPTY) {
      calculator.terminate();
      logger.info('Starting supplied result handler',);
      logger.debug('Data', finished,);
      resultHandler(finished,);
      logger.info('Done',);
    }
  },);
  validator.on('message', (data: ValidationResult,) => {
    logger.debug(`Starting validation of ${ data.id }`,);
    results[data.id] = results[data.id] || new ResultSet(data.id,);
    results[data.id].add(data,);
    bar.increment();
    if (results[data.id].count === threads*repetitions) {
      logger.info(`Finished requesting all ${ data.id }`,);
      logger.debug(`Starting analyzation of ${ data.id }`,);
      analysing ++;
      calculator.postMessage(results[data.id],);
    }
    checking --;
    logger.debug(`Finished validation of ${ data.id }`,);
    if (active === EMPTY && checking === EMPTY) {
      validator.terminate();
      logger.info('Validations done',);
    }
  },);
  logger.debug(`starting up ${ threads } Workers`,);
  for (let j=0; j<threads; j ++) {
    workers.push(new Worker('./worker/webrequest.js',),);
    workers[j].on('message', (data: Result,) => {
      logger.debug(`Starting validation of ${ data.id }`,);
      checking ++;
      bar.increment();
      validator.postMessage(data,);
      if (internalTasks.length > EMPTY) {
        logger.debug('Starting next request',);
        workers[j].postMessage(internalTasks.shift(),);
        return;
      }
      active --;
      workers[j].terminate();
      logger.info('All requests done, terminating thread',);
    },);
    active ++;
    workers[j].postMessage(internalTasks.shift(),);
  }
};

export default executor;
