import Reporter from './reporter';
import {
  FinishedSet,
} from '../finished-set';

interface ReporterList extends Reporter {
  addReporter: (reporter: Reporter) => void;
}
interface Results {
  [id: string]: FinishedSet;
}

const reporters: Array<Reporter> = [];
const multi: ReporterList = (results: Results,): void => {
  for (const reporter of reporters) {
    reporter(results,);
  }
};

multi.addReporter = (reporter: Reporter,): void => {
  if (! reporters.includes(reporter,)) {
    reporters.push(reporter,);
  }
};

export default multi;
