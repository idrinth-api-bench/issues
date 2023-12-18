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
import Reporter from './reporter/reporter.js';
import validateTasks from './validate-tasks.js';
import Job from './job.js';
import ReportModifier from './report-modifier/report-modifier.js';
import Storage from './storage/storage.js';
import Progress from './progress/progress.js';
import language from './helper/language.js';
import onBefore from './messaging/before.js';
import onAfter from './messaging/after.js';
import onWorker from './messaging/worker.js';
import onCalculate from './messaging/calculator.js';
import Counter from './counter.js';
import WorkerConstructor from './worker/worker-constructor.js';
import buildWorker from './worker/worker-factory.js';
import Thread from './worker/thread.js';

const EMPTY = 0;

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
  const total = threads*repetitions;
  const now = new Date();
  validateTasks(repetitions, threads, job.main,);
  const results: {[z: string]: ResultSet} = {};
  const finished: {[z: string]: FinishedSet} = {};
  const internalTasks = [];
  logger.debug(
    language('initialization', `${ repetitions }`, `${ threads }`,),
  );
  for (const task of job.main) {
    for (let i=0; i<total; i ++) {
      internalTasks.push(task,);
    }
  }
  progress.start(job, repetitions, threads,);
  const calculator = buildWorker(
    Worker,
    'calculator',
    (data: FinishedSet, self:Thread,) => onCalculate(
      data,
      finished,
      now,
      resultStorage,
      logger,
      progress,
      self,
      reportModifiers,
      resultHandler,
      resultOutputDir,
    ),);
  const after = buildWorker(
    Worker,
    'webrequest',
    (data, self: Thread,) => onAfter(
      progress,
      job,
      logger,
      self,
    ),
  );
  const startMain = () => {
    logger.debug(language('starting_workers', `${ threads }`,),);
    for (let j=0; j<threads; j ++) {
      const worker = buildWorker(
        Worker,
        'webrequest',
        (data: ValidationResult, self: Thread,) => onWorker(
          data,
          progress,
          logger,
          results,
          total,
          calculator,
          internalTasks,
          self,
          after,
          job,
        ),
      );
      Counter.increment('active',);
      worker.postMessage(internalTasks.shift(),);
    }
  };
  const before = buildWorker(
    Worker,
    'webrequest',
    (data, self: Thread,) => onBefore(
      progress,
      job,
      logger,
      self,
      startMain,
    ),
  );
  if (job.before.length > EMPTY) {
    logger.debug(language('next_request',),);
    before.postMessage(job.before.shift(),);
  } else {
    before.terminate();
    startMain();
  }
};

export default executor;
