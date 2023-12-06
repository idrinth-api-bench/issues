import {
  HashMap,
} from '../hashmap.js';
import {
  Middleware,
} from '../middleware.js';
import * as reqlib from 'app-root-path';
import include from './include-default.js';

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
const load = async(path: string,): Promise<Middleware> => {
  const req = cache[path] || (cache[path] = resolve(path,));
  return await include(req,) as Middleware;
};
export default load;
