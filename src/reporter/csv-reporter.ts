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

const csv : Reporter = (results: {[id: string]: FinishedSet},): void => {
  const csvStream = format({
    headers: true,
  },);

  csvStream.pipe(createWriteStream(process.cwd() + '/result.csv',),);

  for (const id of Object.getOwnPropertyNames(results,)) {
    csvStream.write(results[id],);
  }
  csvStream.end();
};

export default csv;
