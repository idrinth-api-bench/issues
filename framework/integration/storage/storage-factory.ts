import MysqlStorage from '../../src/storage/mysql-storage.js';
import {
  expect,
} from 'chai';
import 'mocha';
import storageFactory from '../../src/storage/storage-factory';
import getDatabase from '@databases/mysql-test';
import NoopStorage from '../../src/storage/noop-storage';
import delay from '../delay';

const WAIT_LONG = 25000;
const WAIT_MEDIUM = 1000;
const RADIX = 10;

describe('storage/storage-factory', () => {
  it('should be a function', () => {
    expect(storageFactory,).to.be.a('function',);
  },);
  it('(mysql) should not throw an error', async() => {
    const database: {
      databaseURL: string;
      kill: () => Promise<void>;
    } = await getDatabase.default({
      mysqlUser: 'idrinth-api-bench',
      mysqlPassword: 'mysqlTestPassword',
      mysqlDb: 'idrinth-api-bench',
      containerName: 'storage-factory-mysql',
      defaultExternalPort: 3338,
    },);
    const port = Number.parseInt(
      database.databaseURL.replace(/\D/gui, '',),
      RADIX,
    );
    const storage = storageFactory({
      databaseUser: 'idrinth-api-bench',
      databasePassword: 'mysqlTestPassword',
      databaseDatabase: 'idrinth-api-bench',
      databasePort: port,
      database: 'mysql',
      cwd: '',
      task: 'bench',
    },) as MysqlStorage;
    expect(storage,).to.be.an.instanceof(MysqlStorage,);
    await delay(WAIT_MEDIUM,);
    storage.close();
    await database.kill();
  },).timeout(WAIT_LONG,);
  it('(noop) should not throw an error', function() {
    const storage = storageFactory({
      cwd: '',
      task: 'bench',
    },);
    expect(storage,).to.be.an.instanceof(NoopStorage,);
  },);
},);
