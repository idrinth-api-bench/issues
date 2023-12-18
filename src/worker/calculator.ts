import {
  ResultSet,
} from '../result-set.js';
import {
  FinishedSet,
} from '../finished-set.js';

const CONSTANTS = {
  EMPTY: 0,
  FIRST: 0,
  PERCENT10: 0.1,
  PERCENT90: 0.9,
  ARRAY_LENGTH_OFFSET: 1,
};
const calculateAverage = (
  ...inputs: Array<number>
): number => Math.round(inputs.reduce((a, b,) => a+b,)/inputs.length,);
const getLast = (
  input: Array<number>,
): number => input.length -CONSTANTS.ARRAY_LENGTH_OFFSET;
const calculateStandardDeviation = (
  avg: number,
  input: Array<number>,
): number => {
  let variance = 0;
  for (const duration of input) {
    variance += (duration - avg) * (duration - avg) / input.length;
  }
  return Math.sqrt(variance,);
};
export default (result: ResultSet,): FinishedSet => {
  if (result.durations.length === CONSTANTS.EMPTY) {
    return {
      id: result.id,
      errors: result.errors,
      msgs: result.msgs || {},
      count: result.count,
      stdv100: NaN,
      stdv80: NaN,
      avg100: NaN,
      median100: NaN,
      min100: NaN,
      max100: NaN,
      avg80: NaN,
      median80: NaN,
      min80: NaN,
      max80: NaN,
    };
  }
  const sorted100 = result.durations.sort((a: number, b: number,) => a-b,);
  const center80 = sorted100.slice(
    Math.floor(result.count * CONSTANTS.PERCENT10,),
    Math.ceil(result.count * CONSTANTS.PERCENT90,),
  );
  const avg100 = calculateAverage(...sorted100,);
  const avg80 = calculateAverage(...center80,);
  const stdv100 = calculateStandardDeviation(avg100, sorted100,);
  const stdv80 = calculateStandardDeviation(avg80, center80,);
  const min100 = sorted100[CONSTANTS.FIRST];
  const max100 = sorted100[getLast(sorted100,)];
  const min80 = center80[CONSTANTS.FIRST];
  const max80 = center80[getLast(center80,)];
  return {
    id: result.id,
    errors: result.errors,
    msgs: result.msgs || {},
    count: result.count,
    stdv100,
    stdv80,
    avg100,
    median100: calculateAverage(min100, max100,),
    min100,
    max100,
    avg80,
    median80: calculateAverage(min80, max80,),
    min80,
    max80,
  };
};
