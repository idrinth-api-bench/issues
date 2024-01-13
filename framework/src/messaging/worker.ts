import {
  ValidationResult,
} from '../validation-result.js';
import language from '../helper/language.js';
import {
  ResultSet,
} from '../result-set.js';
import Progress from '../progress/progress.js';
import {
  Logger,
} from '../logger/logger.js';
import Thread from '../worker/thread.js';
import {
  Task,
} from '../task.js';
import store from '../store.js';
import Job from '../job.js';
import Counter from '../counter.js';
import ResultMap from '../result-map.js';
import {
  EMPTY,
} from '../constants.js';

const startAfter = (
  after: Thread,
  logger: Logger,
  progress: Progress,
  job: Job,
  // eslint-disable-next-line max-params
): void => {
  if (! Counter.isEmpty('active',)) {
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

const startAnalyzing = (
  id: string,
  total: number,
  logger: Logger,
  calculator: Thread,
  results: ResultMap,
  // eslint-disable-next-line max-params
): void => {
  if (results[id].count !== total) {
    return;
  }
  logger.info(language('finished_requests', id,),);
  logger.debug(language('starting_analyzation', id,),);
  Counter.increment('analyzing',);
  calculator.postMessage(results[id],);
};

const onWorker = (
  data: ValidationResult,
  progress: Progress,
  logger: Logger,
  results: {[z: string]: ResultSet},
  total: number,
  calculator: Thread,
  internalTasks: Task[],
  worker: Thread,
  after: Thread,
  job: Job,
  // eslint-disable-next-line max-params
): void => {
  logger.debug(language('starting_validation', data.id,),);
  results[data.id] = results[data.id] || new ResultSet(data.id,);
  results[data.id].add(data,);
  progress.increment();
  startAnalyzing(data.id, total, logger, calculator, results,);
  if (internalTasks.length > EMPTY) {
    logger.debug(language('next_request',),);
    worker.postMessage(internalTasks.shift(),);
    return;
  }
  Counter.decrement('active',);
  logger.info(language('end_thread',),);
  startAfter(after, logger, progress, job,);
  worker.terminate();
};
export default onWorker;
