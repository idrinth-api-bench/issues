import Storage from './storage.js';
import FinishedSet from '../finished-set.js';
import {
  createConnection,
  Connection,
} from 'mysql2';
import reqlib from 'app-root-path';
import {
  MONTH_OFFSET,
  TEN,
} from '../constants.js';

const project: string = reqlib
  .require('/package-lock.json',)
  .name.replace(/[^a-z0-9\-_]/gu, '_',);

export class MysqlStorage implements Storage {
  private connection: Connection;

  // eslint-disable-next-line max-params
  constructor(
    host: string,
    password: string,
    port: number,
    user: string = 'idrinth-api-bench',
    database: string = 'idrinth-api-bench',
  ) {
    this.connection = createConnection({
      host,
      user,
      password,
      database,
      port,
    },);
    this.connection.execute(
      // eslint-disable-next-line max-len
      `CREATE TABLE IF NOT EXISTS \`${ project }\` (aid BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,id varchar(255) NOT NULL,\`day\` Date NOT NULL,errors int NOT NULL,\`count\` int NOT NULL,stdv100 BIGINT NOT NULL,stdv80 BIGINT NOT NULL,min80 BIGINT NOT NULL,min100 BIGINT NOT NULL,max80 BIGINT NOT NULL,max100 BIGINT NOT NULL,avg80 DECIMAL NOT NULL,avg100 DECIMAL NOT NULL,median80 DECIMAL NOT NULL,median100 DECIMAL NOT NULL,msgs TEXT)`,
      [],
    );
  }

  store(data: FinishedSet, now: Date,): void {
    const date = (() => {
      let result = `${ now.getUTCFullYear() }-`;
      const month = now.getUTCMonth() + MONTH_OFFSET;
      result += month < TEN ? `0${ month }-` : `${ month }-`;
      result += now.getUTCDate() < TEN
        ? `0${ now.getUTCDate() }`
        : `${ now.getUTCDate() }`;
      return result;
    })();
    this.connection.execute(
      // eslint-disable-next-line max-len
      `INSERT INTO \`${ project }\` (id, day, errors, count, stdv100, stdv80, min80, min100,max80, max100, median80, median100, avg80, avg100, msgs) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
      [
        data.id,
        date,
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

  close(): void {
    this.connection.destroy();
  }
}
export default MysqlStorage;
