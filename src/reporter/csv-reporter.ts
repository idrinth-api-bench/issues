import {
  format,
} from '@fast-csv/format';
import Reporter from './reporter.js';
import {
  FinishedSet,
} from '../finished-set.js';
import {
  createWriteStream,
} from 'fs';

const csv: Reporter = (
  results: {[id: string]: FinishedSet},
  rootDir: string,
): void => {
  const csvStream = format({
    headers: true,
  },);

  csvStream.pipe(createWriteStream(rootDir + '/result.csv',),);

  for (const id of Object.getOwnPropertyNames(results,)) {
    csvStream.write({
      ...results[id],
      msgs: JSON.stringify(results[id].msgs,),
    },);
  }
  csvStream.end();
};

export default csv;
