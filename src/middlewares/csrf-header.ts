import {
  Middleware,
} from '../middleware';
import {
  Request,
} from '../request';
import {
  Result,
} from '../result';

let csrf = '';

const prepare = (request: Request,): Request => {
  if (typeof request.headers === 'undefined') {
    request.headers = {};
  }
  if (! request.headers['x-csrf-token'] && csrf) {
    request.headers['x-csrf-token'] = csrf;
  }
  return request;
};

const process = (response: Result,): void => {
  if (typeof response.response.headers === 'undefined') {
    return;
  }
  if (response.response.headers['x-csrf-token']) {
    csrf = response.response.headers['x-csrf-token'];
  }
};
export default {
  prepare,
  process,
} as Middleware;
