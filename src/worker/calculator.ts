import {
  ResultSet,
} from '../result-set';
import {
  FinishedSet,
} from '../finished-set';

const CONSTANTS = {
  EMPTY: 0,
  FIRST: 0,
  PERCENT10: 0.1,
  PERCENT90: 0.9,
  ARRAY_LENGTH_OFFSET: 1,
};
const average = (
  ...inputs: Array<number>
): number => Math.round(inputs.reduce((a, b,) => a+b,)/inputs.length,);
const last = (
  input: Array<number>,
): number => input.length -CONSTANTS.ARRAY_LENGTH_OFFSET;

export = (result: ResultSet,): FinishedSet => {
  if (result.durations.length === CONSTANTS.EMPTY) {
    return {
      id: result.id,
      errors: result.errors,
      msgs: result.msgs || {},
      count: result.count,
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
  const sorted100 = result.durations.sort((a:number, b:number,) => a-b,);
  const center80 = sorted100.slice(
    Math.floor(result.count * CONSTANTS.PERCENT10,),
    Math.ceil(result.count * CONSTANTS.PERCENT90,),
  );
  const min100 = sorted100[CONSTANTS.FIRST];
  const max100 = sorted100[last(sorted100,)];
  const min80 = center80[CONSTANTS.FIRST];
  const max80 = center80[last(center80,)];
  return {
    id: result.id,
    errors: result.errors,
    msgs: result.msgs || {},
    count: result.count,
    avg100: average(...sorted100,),
    median100: average(min100, max100,),
    min100,
    max100,
    avg80: average(...center80,),
    median80: average(min80, max80,),
    min80,
    max80,
  };
};
