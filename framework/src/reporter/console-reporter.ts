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
  const formatter = new Intl.NumberFormat();
  for (const id of Object.getOwnPropertyNames(results,)) {
    table.push([
      results[id].id,
      formatter.format(results[id].errors,),
      formatter.format(results[id].count,),
      formatter.format(results[id].avg100,),
      formatter.format(results[id].median100,),
      formatter.format(results[id].min100,),
      formatter.format(results[id].max100,),
      formatter.format(results[id].avg80,),
      formatter.format(results[id].median80,),
      formatter.format(results[id].min80,),
      formatter.format(results[id].max80,),
      formatter.format(results[id].stdv80,),
      formatter.format(results[id].stdv100,),
    ],);
  }
  // eslint-disable-next-line no-console
  console.log(`${ table }`,);
};

export default cli;
export const CliReporter = cli;
