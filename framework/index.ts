import {
  Reporter as R,
} from './src/reporter/reporter.js';
import {
  CliReporter as CliR,
} from './src/reporter/console-reporter.js';
import {
  CsvReporter as CsvR,
} from './src/reporter/csv-reporter.js';
import {
  HtmlReporter as HR,
} from './src/reporter/html-reporter.js';
import {
  JsonReporter as JR,
} from './src/reporter/json-reporter.js';
import {
  MultiReporter as MR,
} from './src/reporter/multi-reporter.js';
import {
  Wrapper as LW,
} from './src/logger/wrapper.js';
import {
  WinstonWrapper as WLW,
} from './src/logger/winston-wrapper.js';
import {
  PinoWrapper as PLW,
} from './src/logger/pino-wrapper.js';
import {
  Logger as L,
} from './src/logger/logger.js';
import {
  DurationFloatsToInts as DFTIRM,
} from './src/report-modifier/duration-floats-to-ints.js';
import {
  DurationsTimeScaleReduction as DTSRRM,
} from './src/report-modifier/durations-time-scale-reduction.js';
import {
  ReportModifier as RM,
} from './src/report-modifier/report-modifier.js';
import {
  Storage as S,
} from './src/storage/storage.js';
import {
  MysqlStorage as MYSQLS,
} from './src/storage/mysql-storage.js';
import {
  MssqlStorage as MSSQLS,
} from './src/storage/mssql-storage.js';
import {
  PostgresStorage as PGSQL,
} from './src/storage/postgres-storage.js';
import {
  Job as J,
} from './src/job.js';
import {
  Task as T,
} from './src/task.js';
import {
  run as r,
} from './src/main.js';
import rS from './src/result-store.js';
import iR from './src/reporter/internal-reporter.js';

export type Reporter = R;
export const CliReporter = CliR;
export const CsvReporter = CsvR;
export const HtmlReporter = HR;
export const JsonReporter = JR;
export const MultiReporter = MR;
export type Logger = L;
export const WinstonLoggerWrapper = WLW;
export const PinoLoggerWrapper = PLW;
export const LoggerWrapper = LW;
export type ReportModifier = RM;
export type DurationFloatsToIntsReportModifier = DFTIRM;
export type DurationsTimeScaleReductionReportModifier = DTSRRM;
export type Storage = S;
export const MysqlStorage = MYSQLS;
export const MssqlStorage = MSSQLS;
export const PostgresStorage = PGSQL;
export type Job = J;
export type Task = T;
export const internalReporter = iR;
export const resultStore = rS;
export const run = r;
export default r;
