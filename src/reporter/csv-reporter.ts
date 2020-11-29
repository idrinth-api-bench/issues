import {
  format,
} from '@fast-csv/format';
import Reporter from './reporter';
import {
  FinishedSet,
} from '../finished-set';
import {
  createWriteStream,
} from 'fs';

export default class Csv implements Reporter {
  // eslint-disable-next-line class-methods-use-this
  report(results: {[id: string]: FinishedSet},): void {
    const csvStream = format({
      headers: true,
    },);

    csvStream.pipe(createWriteStream(process.cwd() + '/result.csv',),);

    for (const id of Object.getOwnPropertyNames(results,)) {
      if (id !== 'errors') {
        csvStream.write(results[id],);
      }
    }
    csvStream.end();
  }
}
