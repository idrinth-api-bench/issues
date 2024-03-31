import csvReporter from '../src/reporter/csv-reporter.js';
import consoleReporter from '../src/reporter/console-reporter.js';
import jsonReporter from '../src/reporter/json-reporter.js';
import htmlReporter from '../src/reporter/html-reporter.js';
import Reporter from '../src/reporter/reporter';
import FinishedRun from '../src/finished-run';

const reporters: Array<Reporter> = [];
const multiReporter: Reporter = (
  results: FinishedRun,
  rootDir: string,
): void => {
  for (const reporter of reporters) {
    reporter(results, rootDir,);
  }
};
reporters.push(csvReporter,);
reporters.push(consoleReporter,);
reporters.push(jsonReporter,);
reporters.push(htmlReporter,);

export default multiReporter;
