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

const jar: HashMap = {};

const prepare = (request: Request,): Request => {
  if (typeof request.cookies === 'undefined') {
    request.cookies = {};
  }
  for (const cookie in jar) {
    if (typeof jar[cookie] === 'string') {
      request.cookies[cookie] = request.cookies[cookie] || jar[cookie];
    }
  }
  return request;
};

const processor = (response: Result,): void => {
  if (typeof response.response.cookies === 'undefined') {
    return;
  }
  for (const cookie in response.response.cookies) {
    if (typeof response.response.cookies[cookie] === 'string') {
      jar[cookie] = response.response.cookies[cookie];
    }
  }
};
export default {
  process: processor,
  prepare,
} as Middleware;
