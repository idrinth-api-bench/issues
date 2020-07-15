import {
  ValidationResult,
} from './validation-result';

const InitialZero = 0;

export class ResultSet {
  public errors: number;

  public count: number;

  public durations: Array<number>;

  public msgs: {[msg: string]: number};

  public constructor(public readonly id: string,) {
    this.errors = InitialZero;
    this.count = InitialZero;
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
      this.msgs[result.msg] = this.msgs[result.msg] || InitialZero;
      this.msgs[result.msg] ++;
    }
  }
}
