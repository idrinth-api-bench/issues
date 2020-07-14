import Reporter from './reporter';
import {
  FinishedSet,
} from '../finished-set';
import * as Table from 'cli-table3';

const cli: Reporter = (results: {[id: string]: FinishedSet},): void => {
  const table = new Table({
    head: [
      'id',
      'errors',
      'count',
      'avg 100%',
      'median 100%',
      'min 100%',
      'max 100%',
      'avg 80%',
      'median 80%',
      'min 80%',
      'max 80%',
    ],
  },);
  for (const id of Object.getOwnPropertyNames(results,)) {
    table.push(Object.values(results[id],),);
  }
  // eslint-disable-next-line no-console
  console.log(`${ table }`,);
};

export default cli;
