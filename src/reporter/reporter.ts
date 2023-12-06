import {
  FinishedSet,
} from '../finished-set.js';

interface Results {
  [id: string]: FinishedSet;
}

export default interface Reporter {
  (results: Results, rootDir: string): void;
// eslint-disable-next-line semi
}
