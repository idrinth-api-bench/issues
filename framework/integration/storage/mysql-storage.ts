import MysqlStorage from '../../src/storage/mysql-storage.js';
import {
  expect,
} from 'chai';
import 'mocha';
import FinishedSet from '../../src/finished-set';
import getDatabase from '@databases/mysql-test';

let database;
let port = 3307;
const WAIT_MEDIUM = 1000;
const WAIT_LONG = 25000;
const RADIX = 10;

const delay = (time,) => new Promise((resolve,) => setTimeout(resolve, time,),);

describe('storage/mysql-storage', () => {
  before(async function() {
    // eslint-disable-next-line no-invalid-this
    this.timeout(WAIT_LONG,);
    database = await getDatabase.default({
      mysqlUser: 'idrinth-api-bench',
      mysqlPassword: 'mysqlTestPassword',
      mysqlDb: 'idrinth-api-bench',
      containerName: 'storage-mysql',
      defaultExternalPort: 3337,
    },);
    port = Number.parseInt(
      database.databaseURL.replace(/\D/gui, '',),
      RADIX,
    );
  },);
  after(async() => {
    await delay(WAIT_MEDIUM,);
    await database.kill();
  },);
  it('should be a class', () => {
    expect(MysqlStorage,).to.be.a('function',);
  },);
  it('should not throw an error', function(done,) {
    // eslint-disable-next-line no-invalid-this
    this.timeout(WAIT_LONG,);
    const storage = new MysqlStorage('127.0.0.1', 'mysqlTestPassword', port,);
    const results: FinishedSet = {
      id: '1',
      errors: 4,
      count: 7,
      avg100: 6,
      median100: 33,
      min100: 1,
      max100: 199,
      avg80: 6,
      median80: 33,
      min80: 12,
      max80: 99,
      stdv80: 12,
      stdv100: 99,
      msgs: {
        message: 10,
      },
    };
    expect(() => storage.store(results, new Date(),),).to.not.throw();
    setTimeout(() => {
      storage.close();
      done();
    }, WAIT_MEDIUM,);
  },);
},);
