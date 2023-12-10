import {
  FinishedSet,
} from './finished-set.js';
import {
  ResultSet,
} from './result-set.js';
import {
  ValidationResult,
} from './validation-result.js';
import {
  Logger,
} from './logger/logger.js';
import {
  realpathSync,
} from 'fs';
import Reporter from './reporter/reporter.js';
import Progress from 'cli-progress';
import validateTasks from './validate-tasks.js';
import Job from './job.js';
import store from './store.js';
import * as url from 'url';
import ReportModifier from './report-modifier/report-modifier.js';
import Storage from './storage/storage.js';
import reporter from "./reporter/reporter.js";
const __dirname = url.fileURLToPath(new URL('.', import.meta.url,),);

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
  reportModifiers: Array<ReportModifier>,
  resultStorage: Storage,
  resultOutputDir: string,
): void => {
  const now = new Date();
  const buildWorker = (file: string,) : Thread => {
    const path = `${ __dirname }/../worker/${ file }.js`;
    return new Worker(realpathSync(path,),);
  };
  validateTasks(repetitions, threads, job.main,);
  const calculator: Thread = buildWorker('calculator',);
  const bar = new Progress.SingleBar({
    stopOnComplete: true,
    clearOnComplete: true,
  },);
  let active = 0;
  const checking = 0;
  let analysing = 0;
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
    const calculation = job.main.length;
    const pre = job.before.length + job.beforeTask.length * job.main.length;
    const post = job.after.length + job.afterTask.length * job.main.length;
    return pre + main * mainFactor + post + calculation;
  })();
  bar.start(barLength, EMPTY,);
  calculator.on('message', (data: FinishedSet,) => {
    finished[data.id] = data;
    resultStorage.store(data, now,);
    logger.debug(`Analyzation of ${ data.id } finished`,);
    analysing --;
    bar.increment();
    if (active === EMPTY && checking === EMPTY && analysing === EMPTY) {
      calculator.terminate();
      logger.info('Starting supplied result handler',);
      logger.debug('Data', finished,);
      for (const reportModifier of reportModifiers) {
        for (const set of Object.keys(finished,)) {
          finished[set] = reportModifier.adjust(finished[set],);
        }
      }
      resultHandler(finished, resultOutputDir,);
      logger.info('Done',);
    }
  },);
  const before = buildWorker('webrequest',);
  const after = buildWorker('webrequest',);
  const startMain = () => {
    logger.debug(`starting up ${ threads } Workers`,);
    for (let j=0; j<threads; j ++) {
      const worker = buildWorker('webrequest',);
      /* eslint complexity:0 */
      worker.on('message', (data: ValidationResult,) => {
        logger.debug(`Starting validation of ${ data.id }`,);
        results[data.id] = results[data.id] || new ResultSet(data.id,);
        results[data.id].add(data,);
        bar.increment();
        if (results[data.id].count === threads*repetitions) {
          logger.info(`Finished requesting all ${ data.id }`,);
          logger.debug(`Starting analysation of ${ data.id }`,);
          analysing ++;
          calculator.postMessage(results[data.id],);
        }
        if (internalTasks.length > EMPTY) {
          logger.debug('Starting next request',);
          worker.postMessage(internalTasks.shift(),);
          return;
        }
        active --;
        logger.info('All requests done, terminating thread',);
        if (active === EMPTY) {
          if (job.after.length > EMPTY) {
            logger.debug('Starting after request',);
            after.postMessage(job.after.shift(),);
          } else {
            logger.debug('No after request, done',);
            after.terminate();
            store.clean();
            bar.stop();
          }
        }
        worker.terminate();
      },);
      active ++;
      worker.postMessage(internalTasks.shift(),);
    }
  };
  after.on('message', () => {
    bar.increment();
    if (job.after.length > EMPTY) {
      logger.debug('Starting next request',);
      after.postMessage(job.after.shift(),);
      return;
    }
    store.clean();
    after.terminate();
    logger.debug('After done.',);
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
    before.terminate();
    startMain();
  }
};

export default executor;
