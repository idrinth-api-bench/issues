import {
  FinishedSet,
} from '../finished-set.js';

interface ReportModifier {
    adjust(result: FinishedSet): FinishedSet;
}

export default ReportModifier;
