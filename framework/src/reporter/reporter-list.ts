import Reporter from './reporter.js';

interface ReporterList {
  addReporter: (reporter: Reporter) => void;
}

export default ReporterList;
