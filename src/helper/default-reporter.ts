import MultiReporter from '../reporter/multi-reporter';
import CsvReporter from '../reporter/csv-reporter';
import ConsoleReporter from '../reporter/console-reporter';
import JsonReporter from '../reporter/json-reporter';

const multiReporter = new MultiReporter();
multiReporter.addReporter(new CsvReporter(),);
multiReporter.addReporter(new ConsoleReporter(),);
multiReporter.addReporter(new JsonReporter(),);

export default multiReporter;
