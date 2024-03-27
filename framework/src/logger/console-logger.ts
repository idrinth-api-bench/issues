/* eslint {"class-methods-use-this":0, "@typescript-eslint/no-unused-vars":0} */
import Wrapper from './wrapper.js';

export class ConsoleLogger extends Wrapper {
  protected log(
    level: string,
    msg: string,
    data: Record<string, unknown>,
  ): void {
    // eslint-disable-next-line no-console
    console.log(`[${ level }] ${ msg } [${ JSON.stringify(data,) }]`,);
  }
}

export default ConsoleLogger;
