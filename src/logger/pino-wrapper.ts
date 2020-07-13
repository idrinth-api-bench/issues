import {
  Logger,
} from 'pino';
import {
  Wrapper,
} from './wrapper';

export class PinoWrapper extends Wrapper {
  public constructor(private logger: Logger,) {
    super();
  }

  protected log(
    level: string,
    msg: string,
    data: {msg?: string, __msg?: string},
  ): void {
    if (typeof data.msg === 'string') {
      data.__msg = data.msg;
    }
    this.logger[level](data, msg,);
  }
}
