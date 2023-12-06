import Storage from './storage.js';
import {
  FinishedSet,
} from '../finished-set.js';
import mysql2, {
  Connection,
} from 'mysql2';
import reqlib from 'app-root-path';

const project: string = reqlib
  .require('/package-lock.json',)
  .name.replace(/[^a-z0-9\-_]/gu, '_',);

export default class MysqlStorage implements Storage {
  private connection: Connection;

  constructor(databaseHost: string, databasePassword: string,) {
    this.connection = mysql2.createConnection({
      host: databaseHost,
      user: 'idrinth-api-bench',
      password: databasePassword,
      database: 'idrinth-api-bench',
    },);
    this.connection.query(
      // eslint-disable-next-line max-len
      'CREATE TABLE IF NOT EXISTS ? {aid BIGINT NOT NULL AUTOINCREMENT,id varchar(255) NOT NULL,`day` Date NOT NULL,errors int NOT NULL,`count` int NOT NULL,stdv100 BIGINT NOT NULL,stdv80 BIGINT NOT NULL,min80 BIGINT NOT NULL,min100 BIGINT NOT NULL,max80 BIGINT NOT NULL,max100 BIGINT NOT NULL,avg80 DECIMAL NOT NULL,avg100 DECIMAL NOT NULL,msgs TEXT}',
      [ project, ],
    );
  }

  store(data: FinishedSet, now: Date,): void {
    this.connection.query(
      // eslint-disable-next-line max-len
      'INSERT INTO ? (id, day, errors, count, stdv100, stdv80, min80, min100,max80, max100, median80, median100, avg80, avg100, msgs) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
      [
        project,
        data.id,
        now.getUTCFullYear()+'-'+now.getUTCMonth()+'-'+now.getUTCDate(),
        data.errors,
        data.count,
        data.stdv100,
        data.stdv80,
        data.min80,
        data.min100,
        data.max80,
        data.max100,
        data.median80,
        data.median100,
        data.avg80,
        data.avg100,
        JSON.stringify(data.msgs,),
      ],
    );
  }
}
