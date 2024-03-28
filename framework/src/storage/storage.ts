import FinishedSet from '../finished-set.js';

export interface Storage
{
    store(data: FinishedSet, now: Date): void;
}

export default Storage;
