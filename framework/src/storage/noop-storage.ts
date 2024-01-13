import Storage from './storage.js';
import {
  FinishedSet,
} from '../finished-set.js';

export default class NoopStorage implements Storage {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, class-methods-use-this
  store(data: FinishedSet, now: Date,): void {
  }
}
