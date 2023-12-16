import {
  format,
} from '@fast-csv/format';
import Reporter from './reporter.js';
import {
  createWriteStream,
} from 'fs';
import FinishedRun from '../finished-run.js';

const csv: Reporter = (
  results: FinishedRun,
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
