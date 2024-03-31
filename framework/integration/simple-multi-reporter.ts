import csvReporter from '../src/reporter/csv-reporter.js';
import consoleReporter from '../src/reporter/console-reporter.js';
import jsonReporter from '../src/reporter/json-reporter.js';
import htmlReporter from '../src/reporter/html-reporter.js';
import Reporter from '../src/reporter/reporter';
import FinishedRun from '../src/finished-run';

interface ReporterList {
  addReporter: (reporter: Reporter) => void;
}
const reporters: Array<Reporter> = [];
const multiReporter: Reporter&ReporterList = (
  results: FinishedRun,
  rootDir: string,
): void => {
  for (const reporter of reporters) {
    reporter(results, rootDir,);
  }
};
multiReporter.addReporter(csvReporter,);
multiReporter.addReporter(consoleReporter,);
multiReporter.addReporter(jsonReporter,);
multiReporter.addReporter(htmlReporter,);

export default multiReporter;
