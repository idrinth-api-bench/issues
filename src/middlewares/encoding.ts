import {
  Middleware,
} from '../middleware';
import {
  Request,
} from '../request';
import formUrlEncoded from 'form-urlencoded';
import {
  Result,
} from '../result';
import noop from './noop';

const prepare = (request: Request,): Request => {
  if (request.autohandle === 'json') {
    request.body = JSON.stringify(request.body,);
    return request;
  }
  if (request.autohandle === 'form' && typeof request.body === 'object') {
    request.body = formUrlEncoded(request.body,);
  }
  return request;
};

export default {
  ...noop,
  prepare,
} as Middleware;
