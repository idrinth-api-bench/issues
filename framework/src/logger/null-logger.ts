/* eslint {"class-methods-use-this":0, "@typescript-eslint/no-unused-vars":0} */
import Wrapper from './wrapper.js';

export class NullLogger extends Wrapper {
  protected log(
    level: string,
    msg: string,
    data: Record<string, unknown>,
  ): void {
    // noop
  }
}

export default NullLogger;
