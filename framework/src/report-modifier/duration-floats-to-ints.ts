import ReportModifier from './report-modifier.js';
import {
  FinishedSet,
} from '../finished-set.js';

export class DurationFloatsToInts implements ReportModifier {
  // eslint-disable-next-line class-methods-use-this
  adjust(result: FinishedSet,): FinishedSet {
    result.stdv100 = Math.ceil(result.stdv100,);
    result.stdv80 = Math.ceil(result.stdv80,);
    result.avg80 = Math.ceil(result.avg80,);
    result.avg100 = Math.ceil(result.avg100,);
    result.max80 = Math.ceil(result.max80,);
    result.max100 = Math.ceil(result.max100,);
    result.median80 = Math.ceil(result.median80,);
    result.median100 = Math.ceil(result.median100,);
    result.min80 = Math.ceil(result.min80,);
    result.min100 = Math.ceil(result.min100,);
    return result;
  }
}
export default DurationFloatsToInts;
