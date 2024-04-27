import MysqlStorage from './mysql-storage.js';
import PostgresStorage from './postgres-storage.js';
import MssqlStorage from './mssql-storage.js';
import NoopStorage from './noop-storage.js';
import Config from '../cli/config/config.js';
import Storage from './storage.js';

// eslint-disable-next-line complexity
export default (config: Config,): Storage => {
  switch (config.database) {
    case 'mysql':
      return new MysqlStorage(
        config.databaseHost,
        config.databasePassword,
        config.databasePort,
        config.databaseUser ?? 'idrinth-api-bench',
        config.databaseDatabase ?? 'idrinth-api-bench',
      );
    case 'postgres':
      return new PostgresStorage(
        config.databaseHost,
        config.databasePassword,
        config.databasePort,
        config.databaseUser ?? 'idrinth-api-bench',
        config.databaseDatabase ?? 'idrinth-api-bench',
      );
    case 'mssql':
      return new MssqlStorage(
        config.databaseHost,
        config.databasePassword,
        config.databasePort,
        config.databaseDriver,
        config.databaseUser ?? 'idrinth-api-bench',
        config.databaseDatabase ?? 'idrinth-api-bench',
        config.databaseTrustedConnection === 'true',
      );
    default:
      return new NoopStorage();
  }
};
