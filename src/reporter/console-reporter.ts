import Reporter from './reporter.js';
import {
  FinishedSet,
} from '../finished-set.js';
import Table from 'cli-table3';
import FinishedRun from "../FinishedRun.js";

const cli: Reporter = (
  results: FinishedRun,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  rootDir: string,
): void => {
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
      'stdv 80%',
      'stdv 100%',
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
      vals.stdv80,
      vals.stdv100,
    ],);
  }
  // eslint-disable-next-line no-console
  console.log(`${ table }`,);
};

export default cli;
