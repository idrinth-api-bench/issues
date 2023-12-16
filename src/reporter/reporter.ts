import FinishedRun from '../finished-run.js';

interface Reporter {
  (results: FinishedRun, rootDir: string): void;
}

export default Reporter;
