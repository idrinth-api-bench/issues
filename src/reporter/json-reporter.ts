import Reporter from './reporter';
import {
  FinishedSet,
} from '../finished-set';
import {
  writeFileSync,
} from 'fs';

const cli: Reporter = (results: {[id: string]: FinishedSet},): void => {
  writeFileSync(process.cwd() + '/result.json', JSON.stringify(results,),);
};

export default cli;
