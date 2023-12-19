import ReportModifier from './report-modifier.js';
import {
  FinishedSet,
} from '../finished-set.js';
import {
  THOUSAND,
} from '../constants.js';

export default class DurationsTimeScaleReduction implements ReportModifier {
  // eslint-disable-next-line class-methods-use-this
  adjust(result: FinishedSet,): FinishedSet {
    result.stdv100 = result.stdv100/THOUSAND;
    result.stdv80 = result.stdv80/THOUSAND;
    result.avg80 = result.avg80/THOUSAND;
    result.avg100 = result.avg100/THOUSAND;
    result.max80 = result.max80/THOUSAND;
    result.max100 = result.max100/THOUSAND;
    result.median80 = result.median80/THOUSAND;
    result.median100 = result.median100/THOUSAND;
    result.min80 = result.min80/THOUSAND;
    result.min100 = result.min100/THOUSAND;
    return result;
  }
}
