import Reporter from './reporter';
import {
  FinishedSet,
} from '../finished-set';
import {
  writeFileSync,
} from 'fs';

export default class Json implements Reporter {
  // eslint-disable-next-line class-methods-use-this
  report(results: {[id: string]: FinishedSet},): void {
    writeFileSync(process.cwd() + '/result.json', JSON.stringify(results,),);
  }
}
