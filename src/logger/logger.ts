export interface Logger {
  trace(msg: string, data: Record<string, unknown>): void;
  trace(msg: string): void;
  trace(error: Error): void;
  debug(msg: string, data: Record<string, unknown>): void;
  debug(msg: string): void;
  debug(error: Error): void;
  info(msg: string, data: Record<string, unknown>): void;
  info(msg: string): void;
  info(error: Error): void;
  warn(msg: string, data: Record<string, unknown>): void;
  warn(msg: string): void;
  warn(error: Error): void;
  error(msg: string, data: Record<string, unknown>): void;
  error(msg: string): void;
  error(error: Error): void;
  fatal(msg: string, data: Record<string, unknown>): void;
  fatal(msg: string): void;
  fatal(error: Error): void;
}
