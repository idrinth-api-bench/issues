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

/* eslint max-params:0 */
export const run = (
  threads: number,
  repetitions: number,
  job: Job,
  resultHandler?: Reporter|undefined,
  logger?: Logger|undefined,
): void => {
  if (typeof logger === 'undefined') {
    logger = new NullLogger();
  }
  if (typeof resultHandler === 'undefined') {
    resultHandler = defaultReporter;
  }
  executor(threads, repetitions, job, resultHandler, logger, Worker,);
};

/* eslint max-params:0 */
export default (
  threads: number,
  repetitions: number,
  tasks: Array<Task>,
  resultHandler?: Reporter|undefined,
  logger?: Logger|undefined,
): void => {
  const job: Job = {
    before: [],
    beforeTask: [],
    beforeEach: [],
    main: tasks,
    afterEach: [],
    afterTask: [],
    after: [],
  };
  run(threads, repetitions, job, resultHandler, logger,);
};
