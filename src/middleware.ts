import {
  Request,
} from './request';
import {
  Result,
} from './result';

export interface Middleware {
  process(response: Result): void;
  prepare(request: Request): Request;
}
