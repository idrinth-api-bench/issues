import HashMap from '../hashmap.js';
import Middleware from '../middleware.js';
import reqlib from 'app-root-path';
import include from './include-default.js';
import {
  FIRST,
  FRAMEWORK_ROOT,
  INCLUDE_EXTENSION,
  SECOND,
} from '../constants.js';

const cache: HashMap = {};
const resolve = (path: string,): string => {
  const shortened = path.substring(SECOND,);
  if (path[FIRST] === '^') {
    return FRAMEWORK_ROOT + '/src/middlewares/' + shortened + INCLUDE_EXTENSION;
  }
  if (path[FIRST] === '#') {
    return reqlib + '/src/middlewares/' + shortened + INCLUDE_EXTENSION;
  }
  if (path[FIRST] === '$') {
    return reqlib + '/node_modules/'
      + shortened.replace(/\/([^/]+)$/u, '/src/middlewares/$1',)
      + INCLUDE_EXTENSION;
  }
  return path.endsWith(INCLUDE_EXTENSION,) ? path : path + INCLUDE_EXTENSION;
};
const load = async(path: string,): Promise<Middleware> => {
  const req = cache[path] || (cache[path] = resolve(path,));
  return await include(req,) as Middleware;
};
export default load;
