import multiReporter from '../src/reporter/multi-reporter.js';
import csvReporter from '../src/reporter/csv-reporter.js';
import consoleReporter from '../src/reporter/console-reporter.js';
import jsonReporter from '../src/reporter/json-reporter.js';
import htmlReporter from '../src/reporter/html-reporter.js';

multiReporter.addReporter(csvReporter,);
multiReporter.addReporter(consoleReporter,);
multiReporter.addReporter(jsonReporter,);
multiReporter.addReporter(htmlReporter,);

export default multiReporter;
