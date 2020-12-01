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

let access = '';
let refresh = '';

const retrieve = (
  fallback: string,
  body: HashMap,
  ...keys: [...Array<string>]
): string => {
  for (const key of keys) {
    if (typeof body[key] === 'string') {
      return body[key];
    }
  }
  return fallback;
};

const prepare = (request: Request,): Request => {
  if (typeof request.body === 'string') {
    request.body = request.body.replace(
      /%refresh-token-middleware%/ug,
      refresh,
    );
    request.body = request.body.replace(
      /%access-token-middleware%/ug,
      access,
    );
  }
  if (typeof request.headers === 'undefined') {
    request.headers = {};
  }
  if (access) {
    request.headers.authorization = `Bearer ${ access }`;
  }
  return request;
};

const process = (response: Result,): void => {
  if (typeof response.response.headers === 'undefined') {
    return;
  }
  if (response.response.headers['content-type'] !== 'application/json') {
    return;
  }
  const body = JSON.parse(response.response.body,);
  access = retrieve(access, body, 'access', 'access_token', 'access-token',);
  refresh = retrieve(
    refresh,
    body,
    'refresh',
    'refresh_token',
    'refresh-token',
  );
};
export default {
  prepare,
  process,
} as Middleware;
