import multiReporter from '../reporter/multi-reporter';
import csvReporter from '../reporter/csv-reporter';
import consoleReporter from '../reporter/console-reporter';
import jsonReporter from '../reporter/json-reporter';

multiReporter.addReporter(csvReporter,);
multiReporter.addReporter(consoleReporter,);
multiReporter.addReporter(jsonReporter,);

export default multiReporter;
