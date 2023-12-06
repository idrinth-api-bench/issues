import {
  Request,
} from './request.js';
import {
  Result,
} from './result.js';

export interface Middleware {
  process(response: Result): void;
  prepare(request: Request): Request;
}
