import multiReporter from '../reporter/multi-reporter.js';
import csvReporter from '../reporter/csv-reporter.js';
import consoleReporter from '../reporter/console-reporter.js';
import jsonReporter from '../reporter/json-reporter.js';
import htmlReporter from '../reporter/html-reporter.js';

multiReporter.addReporter(csvReporter,);
multiReporter.addReporter(consoleReporter,);
multiReporter.addReporter(jsonReporter,);
multiReporter.addReporter(htmlReporter,);

export default multiReporter;
