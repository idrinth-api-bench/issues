import {
  Task,
} from './task';
import {
  Logger,
} from './logger/logger';
import {
  NullLogger,
} from './logger/null-logger';
import Reporter from './reporter/reporter';
import defaultReporter from './helper/default-reporter';
import executor from './executor';
import {
  Worker,
} from 'worker_threads';
import Job from './job';
import jobCreator from './helper/job-creator';

const DEFAULT_THREADS = 10;
const DEFAULT_REPETITIONS = 1000;

/* eslint max-params:0 */
export const run = (
  threads = DEFAULT_THREADS,
  repetitions = DEFAULT_REPETITIONS,
  job: Job|Array<Task>|undefined,
  resultHandler?: Reporter|undefined,
  logger?: Logger|undefined,
): void => {
  if (typeof logger === 'undefined') {
    logger = new NullLogger();
  }
  if (typeof resultHandler === 'undefined') {
    resultHandler = defaultReporter;
  }
  if (typeof job === 'undefined') {
    job = jobCreator();
  } else if (typeof job === 'object' && Array.isArray(job,)) {
    job = {
      before: [],
      beforeTask: [],
      beforeEach: [],
      main: job,
      afterEach: [],
      afterTask: [],
      after: [],
    };
  }
  executor(threads, repetitions, job, resultHandler, logger, Worker,);
};

/* eslint max-params:0 */
export default (
  threads = DEFAULT_THREADS,
  repetitions = DEFAULT_REPETITIONS,
  job: Job|Array<Task>|undefined,
  resultHandler?: Reporter|undefined,
  logger?: Logger|undefined,
): void => {
  run(threads, repetitions, job, resultHandler, logger,);
};
