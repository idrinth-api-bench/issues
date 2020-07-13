/* eslint {"class-methods-use-this":0, "@typescript-eslint/no-unused-vars":0} */
import {
  Logger,
} from './logger';

export class NullLogger implements Logger {
  public fatal(msg: string|Error, data?: Record<string, unknown>,): void {
    //nothing to do
  }

  public error(msg: string|Error, data?: Record<string, unknown>,): void {
    //nothing to do
  }

  public warn(msg: string|Error, data?: Record<string, unknown>,): void {
    //nothing to do
  }

  public info(msg: string|Error, data?: Record<string, unknown>,): void {
    //nothing to do
  }

  public debug(msg: string|Error, data?: Record<string, unknown>,): void {
    //nothing to do
  }

  public trace(msg: string|Error, data?: Record<string, unknown>,): void {
    //nothing to do
  }
}
