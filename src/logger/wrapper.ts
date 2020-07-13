import {
  Logger,
} from './logger';

export abstract class Wrapper implements Logger {
  protected abstract log(
    level: string,
    msg: string,
    data: Record<string, unknown>|Error,
  ): void

  private _log(
    level: string,
    msg: string|Error,
    data: Error|Record<string, unknown>|undefined,
  ) {
    if (typeof msg === 'object') {
      data = msg;
      msg = '';
    } else if (! data) {
      data = {};
    }
    this.log(level, msg, data,);
  }

  public fatal(msg: string|Error, data?: Record<string, unknown>,): void {
    this._log('fatal', msg, data,);
  }

  public error(msg: string|Error, data?: Record<string, unknown>,): void {
    this._log('error', msg, data,);
  }

  public warn(msg: string|Error, data?: Record<string, unknown>,): void {
    this._log('warn', msg, data,);
  }

  public info(msg: string|Error, data?: Record<string, unknown>,): void {
    this._log('info', msg, data,);
  }

  public debug(msg: string|Error, data?: Record<string, unknown>,): void {
    this._log('debug', msg, data,);
  }

  public trace(msg: string|Error, data?: Record<string, unknown>,): void {
    this._log('trace', msg, data,);
  }
}
