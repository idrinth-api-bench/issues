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

export default class implements ReporterList {
    private reporters: Array<Reporter> = [];

    report(results: Results,): void {
      for (const reporter of this.reporters) {
        reporter.report(results,);
      }
    }

    addReporter(reporter: Reporter,): void {
      if (! this.reporters.includes(reporter,)) {
        this.reporters.push(reporter,);
      }
    }
}
