import {
  Middleware,
} from '../middleware';
import {
  Result,
} from '../result';
import {
  Request,
} from '../request';
import agent from '../helper/user-agent';
import process from './noop';

const prepare = (request: Request,): Request => {
  if (typeof request.headers === 'undefined') {
    request.headers = {};
  }
  if (! request.headers['user-agent']) {
    request.headers['user-agent'] = agent;
  }
  return request;
};

export default {
  ...process,
  prepare,
} as Middleware;
