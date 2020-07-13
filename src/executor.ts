import {
  Worker,
} from 'worker_threads';
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
import {
  NullLogger,
} from './logger/null-logger';

const EMPTY = 0;

/* eslint max-params:0 */
const executor = (
  threads: number,
  repetitions: number,
  tasks: Array<Task>,
  resultHandler: (data: {[z:string]: FinishedSet},) => undefined,
  logger: Logger|undefined,
): void => {
  if (typeof logger === 'undefined') {
    logger = new NullLogger();
  }
  const validator: Worker = new Worker('./worker/validator.js',);
  const calculator: Worker = new Worker('./worker/calculator.js',);
  let active = 0;
  let checking = 0;
  let analysing = 0;
  const workers: Array<Worker> = [];
  const results: {[z:string]: ResultSet} = {};
  const finished: {[z:string]: FinishedSet} = {};
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
  calculator.on('message', (data: FinishedSet,) => {
    finished[data.id] = data;
    logger.debug(`Analyzation of ${ data.id } finished`,);
    analysing --;
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
      validator.postMessage(data,);
      if (internalTasks.length > EMPTY) {
        logger.debug('Starting next request',);
        workers[j].postMessage(internalTasks.shift(),);
        return;
      }
      active --;
      workers[j].terminate();
      logger.info('All requests done',);
    },);
    active ++;
    workers[j].postMessage(internalTasks.shift(),);
  }
};

export default executor;
