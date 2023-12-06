import FinishedRun from '../FinishedRun.js';

interface Reporter {
  (results: FinishedRun, rootDir: string): void;
}

export default Reporter;
