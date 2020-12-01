import {
  Middleware,
} from '../middleware';
import {
  Request,
} from '../request';
import {
  Result,
} from '../result';
import {
  HashMap,
} from '../hashmap';

const access = '';
const refresh = '';

const get = (
  fallback: string,
  body: HashMap,
  ...keys: Array<string>
): string => {
  for (const key of keys) {
    if (typeof body[key] === 'string') {
      return body[key];
    }
  }
  return fallback;
};

const prepare = (request: Request,): Request => request;

const process = (response: Result,): void => {
  //noop
};
export default {
  prepare,
  process,
} as Middleware;
