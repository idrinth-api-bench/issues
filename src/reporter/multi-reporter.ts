import Reporter from './reporter';
import {
  FinishedSet,
} from '../finished-set';

interface ReporterList {
  addReporter: (reporter: Reporter) => void;
}
interface Results {
  [id: string]: FinishedSet;
}

const reporters: Array<Reporter> = [];
const multi: Reporter&ReporterList = (results: Results,): void => {
  for (const reporter of reporters) {
    reporter(results,);
  }
};

multi.addReporter = (reporter: Reporter,): void => {
  reporters.push(reporter,);
};

export default multi;
