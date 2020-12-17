import {
  Result,
} from './result';
import {
  FinishedSet,
} from './finished-set';
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
  realpathSync,
} from 'fs';
import Reporter from './reporter/reporter';
import * as Progress from 'cli-progress';
import validateTasks from './validate-tasks';
import Job from './job';

const EMPTY = 0;
const SINGLE = 1;

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
  job: Job,
  resultHandler: Reporter,
  logger: Logger,
  Worker: WorkerConstructor,
): void => {
  const buildWorker = (file: string,) : Thread => {
    const path = `${ __dirname }/../worker/${ file }.js`;
    return new Worker(realpathSync(path,),);
  };
  validateTasks(repetitions, threads, job.main,);
  const validator: Thread = buildWorker('validator',);
  const calculator: Thread = buildWorker('calculator',);
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
  for (const task of job.main) {
    for (let i=0; i<threads*repetitions; i ++) {
      internalTasks.push(task,);
    }
  }
  const barLength = (() => {
    const main = job.main.length * repetitions * threads;
    const mainFactor = SINGLE + job.afterEach.length + job.beforeEach.length;
    const validation = job.main.length * repetitions * threads;
    const calculation = job.main.length;
    const pre = job.before.length + job.beforeTask.length * job.main.length;
    const post = job.after.length + job.afterTask.length * job.main.length;
    return pre + main * mainFactor + post + validation + calculation;
  })();
  bar.start(barLength, EMPTY,);
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
  const before = buildWorker('webrequest',);
  const after = buildWorker('webrequest',);
  const startMain = () => {
    logger.debug(`starting up ${ threads } Workers`,);
    for (let j=0; j<threads; j ++) {
      workers.push(buildWorker('webrequest',),);
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
        if (active === EMPTY) {
          if (job.after.length > EMPTY) {
            logger.debug('Starting next request',);
            after.postMessage(job.after.shift(),);
          } else {
            after.terminate();
            before.terminate();
          }
        }
      },);
      active ++;
      workers[j].postMessage(internalTasks.shift(),);
    }
  };
  after.on('message', () => {
    bar.increment();
    if (job.after.length > EMPTY) {
      logger.debug('Starting next request',);
      after.postMessage(job.after.shift(),);
      return;
    }
    after.terminate();
    before.terminate();
  },);
  before.on('message', () => {
    bar.increment();
    if (job.before.length > EMPTY) {
      logger.debug('Starting next request',);
      before.postMessage(job.before.shift(),);
      return;
    }
    before.terminate();
    startMain();
  },);
  if (job.before.length > EMPTY) {
    logger.debug('Starting next request',);
    before.postMessage(job.before.shift(),);
  } else {
    startMain();
  }
};

export default executor;
