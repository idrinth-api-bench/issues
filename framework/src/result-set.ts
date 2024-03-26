import {
  ValidationResult,
} from './validation-result.js';
import {
  INITIAL_ZERO,
} from './constants.js';

export class ResultSet {
  public errors: number;

  public count: number;

  public durations: Array<number>;

  public msgs: {[msg: string]: number};

  public constructor(public readonly id: string,) {
    this.errors = INITIAL_ZERO;
    this.count = INITIAL_ZERO;
    this.durations = [];
    this.msgs = {};
  }

  public add(result: ValidationResult,): void {
    if (result.duration !== null) {
      this.durations.push(result.duration,);
    }
    this.count ++;
    if (! result.success) {
      this.errors ++;
    }
    if (result.msg) {
      this.msgs[result.msg] = this.msgs[result.msg] || INITIAL_ZERO;
      this.msgs[result.msg] ++;
    }
  }
}

export default ResultSet;
