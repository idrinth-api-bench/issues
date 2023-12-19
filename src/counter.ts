import {
  COUNTER_STEP,
  EMPTY,
} from './constants.js';

const counter = {};

export default class Counter {
  static increment(key: string,): void {
    counter[key] = (counter[key] || EMPTY) + COUNTER_STEP;
  }

  static decrement(key: string,): void {
    counter[key] = (counter[key] || EMPTY) - COUNTER_STEP;
  }

  static isEmpty(key: string,): boolean {
    return typeof counter[key] === 'undefined' || counter[key] === EMPTY;
  }

  static clear(): void {
    for (const key of Object.keys(counter,)) {
      delete counter[key];
    }
  }
}
