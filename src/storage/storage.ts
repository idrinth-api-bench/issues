import {
  FinishedSet,
} from '../finished-set.js';

interface Storage
{
    store(data: FinishedSet, now: Date): void;
}

export default Storage;
