import {
  HashMap,
} from '../hashmap.js';
import {
  Middleware,
} from '../middleware.js';
import * as reqlib from 'app-root-path';
import include from './include-default.js';
import {
  realpathSync,
} from 'fs';
import url from 'url';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url,),);

const FIRST = 0;
const SECOND = 1;
const cache: HashMap = {};
const resolve = (path: string,): string => {
  const shortened = path.substring(SECOND,);
  if (path[FIRST] === '^') {
    return realpathSync(__dirname + '/../middlewares/' + shortened + '.js',);
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
