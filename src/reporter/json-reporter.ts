import Reporter from './reporter.js';
import {
  FinishedSet,
} from '../finished-set.js';
import {
  writeFileSync,
} from 'fs';

const json: Reporter = (
  results: {[id: string]: FinishedSet},
  rootDir: string,
): void => {
  writeFileSync(rootDir+ '/result.json', JSON.stringify(results,),);
};

export default json;
