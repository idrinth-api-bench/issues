import Reporter from './reporter.js';
import store from '../result-store.js';
import FinishedRun from '../finished-run.js';
import {
  EMPTY,
} from '../constants.js';

const internal: Reporter = (
  results: FinishedRun,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  rootDir: string,
): void => {
  let hasError = false;
  for (const id of Object.keys(results,)) {
    hasError = hasError || results[id].errors > EMPTY;
  }
  store.set(! hasError,);
};

export default internal;
