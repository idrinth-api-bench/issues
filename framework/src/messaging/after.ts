import language from '../helper/language.js';
import store from '../store.js';
import Progress from '../progress/progress.js';
import Job from '../job.js';
import Logger from '../logger/logger.js';
import Thread from '../worker/thread.js';
import {
  EMPTY,
} from '../constants.js';

const onAfter = (
  progress: Progress,
  job: Job,
  logger: Logger,
  after: Thread,
  // eslint-disable-next-line max-params
): void => {
  progress.increment();
  if (job.after.length > EMPTY) {
    logger.debug(language('next_request',),);
    after.postMessage(job.after.shift(),);
    return;
  }
  store.clean();
  after.terminate();
  logger.debug(language('after_done',),);
};
export default onAfter;
