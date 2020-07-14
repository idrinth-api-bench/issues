import {
  FinishedSet,
} from '../finished-set';

interface Results {
  [id: string]: FinishedSet;
}

export default interface Reporter {
  (results: Results) : void
// eslint-disable-next-line semi
}
