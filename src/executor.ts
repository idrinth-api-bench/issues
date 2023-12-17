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
import validateTasks from './validate-tasks.js';
import Job from './job.js';
import store from './store.js';
import {
  fileURLToPath,
} from 'url';
import ReportModifier from './report-modifier/report-modifier.js';
import Storage from './storage/storage.js';
import Progress from './progress/progress.js';
import language from './helper/language.js';

const __dirname = fileURLToPath(new URL('.', import.meta.url,),);

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
  job: Job,
  resultHandler: Reporter,
  logger: Logger,
  Worker: WorkerConstructor,
  reportModifiers: Array<ReportModifier>,
  resultStorage: Storage,
  resultOutputDir: string,
  progress: Progress,
): void => {
  const now = new Date();
  const buildWorker = (file: string,) : Thread => {
    const path = `${ __dirname }/../worker/${ file }.js`;
    return new Worker(realpathSync(path,),);
  };
  validateTasks(repetitions, threads, job.main,);
  let active = 0;
  const checking = 0;
  let analysing = 0;
  const results: {[z: string]: ResultSet} = {};
  const finished: {[z: string]: FinishedSet} = {};
  const internalTasks = [];
  logger.debug(
    language('initialization', `${ repetitions }`, `${ threads }`,),
  );
  for (const task of job.main) {
    for (let i=0; i<threads*repetitions; i ++) {
      internalTasks.push(task,);
    }
  }
  progress.start(job, repetitions, threads,);
  const calculator = buildWorker('calculator',);
  // eslint-disable-next-line complexity
  const startResults = () => {
    if (active !== EMPTY || checking !== EMPTY || analysing !== EMPTY) {
      return;
    }
    calculator.terminate();
    logger.info(language('tarting_result',),);
    logger.debug(language('data',), finished,);
    for (const reportModifier of reportModifiers) {
      for (const set of Object.keys(finished,)) {
        finished[set] = reportModifier.adjust(finished[set],);
      }
    }
    resultHandler(finished, resultOutputDir,);
    logger.info(language('done',),);
  };
  calculator.on('message', (data: FinishedSet,) => {
    finished[data.id] = data;
    resultStorage.store(data, now,);
    logger.debug(language('finished_analyzing', data.id,),);
    analysing --;
    progress.increment();
    startResults();
  },);
  const before = buildWorker('webrequest',);
  const after = buildWorker('webrequest',);
  const startMain = () => {
    logger.debug(language('starting_workers', `${ threads }`,),);
    const startAfter = (): void => {
      if (active !== EMPTY) {
        return;
      }
      if (job.after.length > EMPTY) {
        logger.debug(language('starting_after',),);
        after.postMessage(job.after.shift(),);
        return;
      }
      logger.debug(language('no_after',),);
      after.terminate();
      store.clean();
      progress.stop();
    };
    const startAnalyzing = (id: string,): void => {
      if (results[id].count !== threads*repetitions) {
        return;
      }
      logger.info(language('finished_requests', id,),);
      logger.debug(language('starting_analyzation', id,),);
      analysing ++;
      calculator.postMessage(results[id],);
    };
    for (let j=0; j<threads; j ++) {
      const worker = buildWorker('webrequest',);
      worker.on('message', (data: ValidationResult,) => {
        logger.debug(language('starting_validation', data.id,),);
        results[data.id] = results[data.id] || new ResultSet(data.id,);
        results[data.id].add(data,);
        progress.increment();
        startAnalyzing(data.id,);
        if (internalTasks.length > EMPTY) {
          logger.debug(language('next_request',),);
          worker.postMessage(internalTasks.shift(),);
          return;
        }
        active --;
        logger.info(language('end_thread',),);
        startAfter();
        worker.terminate();
      },);
      active ++;
      worker.postMessage(internalTasks.shift(),);
    }
  };
  after.on('message', () => {
    progress.increment();
    if (job.after.length > EMPTY) {
      logger.debug(language('next_request',),);
      after.postMessage(job.after.shift(),);
      return;
    }
    store.clean();
    after.terminate();
    logger.debug(language('after_done',),);
  },);
  before.on('message', () => {
    progress.increment();
    if (job.before.length > EMPTY) {
      logger.debug(language('next_request',),);
      before.postMessage(job.before.shift(),);
      return;
    }
    before.terminate();
    startMain();
  },);
  if (job.before.length > EMPTY) {
    logger.debug(language('next_request',),);
    before.postMessage(job.before.shift(),);
  } else {
    before.terminate();
    startMain();
  }
};

export default executor;
