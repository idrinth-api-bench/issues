import Logger from './logger.js';

export abstract class Wrapper implements Logger {
  protected abstract log(
    level: string,
    msg: string,
    data: Record<string, unknown>,
  ): void

  public fatal(msg: string, data?: Record<string, unknown>,): void {
    this.log('fatal', msg, data || {},);
  }

  public error(msg: string, data?: Record<string, unknown>,): void {
    this.log('error', msg, data || {},);
  }

  public warn(msg: string, data?: Record<string, unknown>,): void {
    this.log('warn', msg, data || {},);
  }

  public info(msg: string, data?: Record<string, unknown>,): void {
    this.log('info', msg, data || {},);
  }

  public debug(msg: string, data?: Record<string, unknown>,): void {
    this.log('debug', msg, data || {},);
  }

  public trace(msg: string, data?: Record<string, unknown>,): void {
    this.log('trace', msg, data || {},);
  }
}

export default Wrapper;
