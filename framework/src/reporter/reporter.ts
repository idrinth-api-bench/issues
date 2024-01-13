import FinishedRun from '../finished-run.js';

export interface Reporter {
  (results: FinishedRun, rootDir: string): void;
}

export default Reporter;
