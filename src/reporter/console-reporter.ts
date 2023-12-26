import Reporter from './reporter.js';
import Table from 'cli-table3';
import FinishedRun from '../finished-run.js';

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
    table.push([
      results[id].id,
      results[id].errors,
      results[id].count,
      results[id].avg100,
      results[id].median100,
      results[id].min100,
      results[id].max100,
      results[id].avg80,
      results[id].median80,
      results[id].min80,
      results[id].max80,
      results[id].stdv80,
      results[id].stdv100,
    ],);
  }
  // eslint-disable-next-line no-console
  console.log(`${ table }`,);
};

export default cli;
export const CliReporter = cli;
