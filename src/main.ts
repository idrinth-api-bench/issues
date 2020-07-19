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

/* eslint max-params:0 */
export default (
  threads: number,
  repetitions: number,
  tasks: Array<Task>,
  resultHandler?: Reporter|undefined,
  logger?: Logger|undefined,
): void => {
  if (typeof logger === 'undefined') {
    logger = new NullLogger();
  }
  if (typeof resultHandler === 'undefined') {
    resultHandler = defaultReporter;
  }
  executor(threads, repetitions, tasks, resultHandler, logger, Worker,);
};
