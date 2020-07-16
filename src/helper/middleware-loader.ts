import {
  HashMap,
} from '../hashmap';
import {
  Middleware,
} from '../middleware';
import * as reqlib from 'app-root-path';

const FIRST = 0;
const SECOND = 1;
const cache: HashMap = {};
const resolve = (path: string,): string => {
  const shortened = path.substring(SECOND,);
  if (path[FIRST] === '^') {
    return '../middlewares/' + shortened;
  }
  if (path[FIRST] === '#') {
    return reqlib + '/src/middlewares/' + shortened;
  }
  if (path[FIRST] === '$') {
    return shortened.replace(/\/([^/]+)$/u, '/src/middlewares/$1',);
  }
  return path;
};
const load = (path: string,): Middleware => {
  const req = cache[path] || (cache[path] = resolve(path,));
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const data = require(req,);
  return typeof data.default !== 'undefined' ? data.default : data;
};
export = load;
