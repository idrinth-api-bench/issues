import {
  Middleware,
} from '../middleware';
import {
  Request,
} from '../request';
import {
  Result,
} from '../result';
import staticImplements from '../helper/static-implements';

let csrf = '';

@staticImplements<Middleware>()
class CsrfHeader {
  public static prepare(request: Request,): Request {
    if (typeof request.headers === 'undefined') {
      request.headers = {};
    }
    if (! request.headers['x-csrf-token'] && csrf) {
      request.headers['x-csrf-token'] = csrf;
    }
    return request;
  }

  public static process(response: Result,): void {
    if (typeof response.response.headers === 'undefined') {
      return;
    }
    if (response.response.headers['x-csrf-token']) {
      csrf = response.response.headers['x-csrf-token'];
    }
  }
}
export default CsrfHeader;
