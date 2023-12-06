import Reporter from './reporter.js';
import {
  FinishedSet,
} from '../finished-set.js';

interface ReporterList {
  addReporter: (reporter: Reporter) => void;
}
interface Results {
  [id: string]: FinishedSet;
}

const reporters: Array<Reporter> = [];
const multi: Reporter&ReporterList = (
  results: Results,
  rootDir: string,
): void => {
  for (const reporter of reporters) {
    reporter(results, rootDir,);
  }
};

multi.addReporter = (reporter: Reporter,): void => {
  if (! reporters.includes(reporter,)) {
    reporters.push(reporter,);
  }
};

export default multi;
