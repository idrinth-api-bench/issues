import FinishedSet from '../finished-set.js';

export interface ReportModifier {
    adjust(result: FinishedSet): FinishedSet;
}

export default ReportModifier;
