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
    msg: string,
    data: Record<string, unknown>|undefined,
  ): void {
    this.log(level, msg, data ? data : {},);
  }

  public fatal(msg: string, data?: Record<string, unknown>,): void {
    this._log('fatal', msg, data,);
  }

  public error(msg: string, data?: Record<string, unknown>,): void {
    this._log('error', msg, data,);
  }

  public warn(msg: string, data?: Record<string, unknown>,): void {
    this._log('warn', msg, data,);
  }

  public info(msg: string, data?: Record<string, unknown>,): void {
    this._log('info', msg, data,);
  }

  public debug(msg: string, data?: Record<string, unknown>,): void {
    this._log('debug', msg, data,);
  }

  public trace(msg: string, data?: Record<string, unknown>,): void {
    this._log('trace', msg, data,);
  }
}
