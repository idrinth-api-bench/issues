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
    const vals = results[id];
    table.push([
      vals.id,
      vals.errors,
      vals.count,
      vals.avg100,
      vals.median100,
      vals.min100,
      vals.max100,
      vals.avg80,
      vals.median80,
      vals.min80,
      vals.max80,
    ],);
  }
  // eslint-disable-next-line no-console
  console.log(`${ table }`,);
};

export default cli;
