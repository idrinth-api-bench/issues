import {
  Middleware,
} from '../middleware.js';
import {
  Request,
} from '../request.js';
import {
  Result,
} from '../result.js';
import staticImplements from '../helper/static-implements.js';
import store from '../store.js';

@staticImplements<Middleware>()
class CsrfHeader {
  public static prepare(request: Request,): Request {
    const csrf = store.get('csrf', '',);
    if (csrf) {
      if (typeof request.headers === 'undefined') {
        request.headers = {};
      }
      if (! request.headers['x-csrf-token']) {
        request.headers['x-csrf-token'] = csrf;
      }
    }
    return request;
  }

  public static process(response: Result,): void {
    if (typeof response.response.headers === 'undefined') {
      return;
    }
    if (response.response.headers['x-csrf-token']) {
      store.set('csrf', response.response.headers['x-csrf-token'],);
    }
  }
}
export default CsrfHeader;
