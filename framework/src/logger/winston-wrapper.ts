import {
  Logger,
} from 'winston';
import Wrapper from './wrapper.js';

export class WinstonWrapper extends Wrapper {
  public constructor(private logger: Logger,) {
    super();
  }

  protected log(
    level: string,
    msg: string,
    data: Record<string, unknown>,
  ): void {
    switch (level) {
      case 'trace':
        level = 'debug';
        break;
      case 'fatal':
        level = 'error';
    }
    this.logger[level](data ? `${ msg } ${ JSON.stringify(data,) }` : msg,);
  }
}

export default WinstonWrapper;
