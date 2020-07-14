import {
  parentPort,
} from 'worker_threads';
import {
  ResultSet,
} from './result-set';
import {
  FinishedSet,
} from './finished-set';

const CONSTANTS = {
  FIRST: 0,
  PERCENT10: 0.1,
  PERCENT90: 0.9,
  ARRAY_LENGTH_OFFSET: 1,
};
const average = (
  ...inputs: Array<number>
): number => inputs.length > 0 ?
  Math.round(inputs.reduce((a, b,) => a+b,)/inputs.length,) :
  NaN;
const last = (
  input: Array<number>,
): number => input.length -CONSTANTS.ARRAY_LENGTH_OFFSET;

parentPort.on('message', (result: ResultSet,) => {
  const sorted100 = result.durations.sort();
  const center80 = sorted100.slice(
    Math.floor(result.count * CONSTANTS.PERCENT10,),
    Math.ceil(result.count * CONSTANTS.PERCENT90,),
  );
  const min100 = sorted100[CONSTANTS.FIRST];
  const max100 = sorted100[last(sorted100,)];
  const min80 = center80[CONSTANTS.FIRST];
  const max80 = center80[last(center80,)];
  const stats: FinishedSet = {
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
  parentPort.postMessage(stats,);
},);
