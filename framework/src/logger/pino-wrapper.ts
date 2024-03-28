import {
  Logger,
} from 'pino';
import Wrapper from './wrapper.js';

export class PinoWrapper extends Wrapper {
  public constructor(private logger: Logger,) {
    super();
  }

  protected log(
    level: string,
    msg: string,
    data: Record<string, unknown>,
  ): void {
    if (typeof data.msg === 'string') {
      data.__msg = data.msg;
    }
    this.logger[level](data, msg,);
  }
}

export default PinoWrapper;
