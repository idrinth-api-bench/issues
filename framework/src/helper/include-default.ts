import analyze from './function-analyzer.js';
import isCallable from 'is-callable';
import {
  INCLUDE_EXTENSION,
} from '../constants.js';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const include = async(path: string,): Promise<any> => {
  path = path
    .replace(/\/\//ug, '/',)
    .replace(/\.ts$/u, INCLUDE_EXTENSION,);
  let val = await import('file://' + path,);
  if (typeof val === 'object' && val.default) {
    val = val.default;
  }
  if (isCallable(val,)) {
    const parameters = analyze(val,);
    return val(...parameters.map((x,) => x.value,),);
  }
  return val;
};

export default include;
