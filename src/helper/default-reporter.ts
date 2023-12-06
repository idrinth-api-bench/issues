import multiReporter from '../reporter/multi-reporter.js';
import csvReporter from '../reporter/csv-reporter.js';
import consoleReporter from '../reporter/console-reporter.js';
import jsonReporter from '../reporter/json-reporter.js';

multiReporter.addReporter(csvReporter,);
multiReporter.addReporter(consoleReporter,);
multiReporter.addReporter(jsonReporter,);

export default multiReporter;
