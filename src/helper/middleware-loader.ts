import {
  HashMap,
} from '../hashmap.js';
import {
  Middleware,
} from '../middleware.js';
import reqlib from 'app-root-path';
import include from './include-default.js';
import {
  FIRST,
  FRAMEWORK_ROOT,
  SECOND,
} from "../constants.js";

const cache: HashMap = {};
const resolve = (path: string,): string => {
  const shortened = path.substring(SECOND,);
  if (path[FIRST] === '^') {
    return FRAMEWORK_ROOT + 'src/middlewares/' + shortened + '.js';
  }
  if (path[FIRST] === '#') {
    return reqlib + '/src/middlewares/' + shortened + '.js';
  }
  if (path[FIRST] === '$') {
    return shortened.replace(/\/([^/]+)$/u, '/src/middlewares/$1',) + '.js';
  }
  return path;
};
const load = async(path: string,): Promise<Middleware> => {
  const req = cache[path] || (cache[path] = resolve(path,));
  return await include(req,) as Middleware;
};
export default load;
