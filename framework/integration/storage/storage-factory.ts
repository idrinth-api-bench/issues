import MysqlStorage from '../../src/storage/mysql-storage.js';
import {
  expect,
} from 'chai';
import 'mocha';
import storageFactory from '../../src/storage/storage-factory';
import getDatabase from '@databases/mysql-test';
import NoopStorage from '../../src/storage/noop-storage';

let database;
let port = 3307;
const WAIT_MEDIUM = 1000;
const WAIT_LONG = 25000;
const RADIX = 10;

const delay = (time,) => new Promise((resolve,) => setTimeout(resolve, time,),);

describe('storage/storage-factory', () => {
  before(async function() {
    // eslint-disable-next-line no-invalid-this
    this.timeout(WAIT_LONG,);
    database = await getDatabase.default({
      mysqlUser: 'idrinth-api-bench',
      mysqlPassword: 'mysqlTestPassword',
      mysqlDb: 'idrinth-api-bench',
    },);
    port = Number.parseInt(
      database.databaseURL.replace(/\D/gui, '',),
      RADIX,
    );
  },);
  after(async() => {
    await delay(WAIT_MEDIUM,);
    database.kill();
  },);
  it('should be a function', () => {
    expect(storageFactory,).to.be.a('function',);
  },);
  it('(mysql) should not throw an error', function() {
    // eslint-disable-next-line no-invalid-this
    this.timeout(WAIT_LONG,);
    const storage = storageFactory({
      databaseUser: 'idrinth-api-bench',
      databasePassword: 'mysqlTestPassword',
      databaseDatabase: 'idrinth-api-bench',
      databasePort: port,
      database: 'mysql',
      cwd: '',
      task: 'bench',
    },);
    expect(storage,).to.be.an.instanceof(MysqlStorage,);
  },);
  it('(noop) should not throw an error', function() {
    // eslint-disable-next-line no-invalid-this
    this.timeout(WAIT_LONG,);
    const storage = storageFactory({
      cwd: '',
      task: 'bench',
    },);
    expect(storage,).to.be.an.instanceof(NoopStorage,);
  },);
},);
