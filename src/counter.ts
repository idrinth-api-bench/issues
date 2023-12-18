const counter = {};
const EMPTY = 0;
const STEP = 1;

export default class Counter {
  static increment(key: string,): void {
    counter[key] = (counter[key] || EMPTY) + STEP;
  }

  static decrement(key: string,): void {
    counter[key] = (counter[key] || EMPTY) - STEP;
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
