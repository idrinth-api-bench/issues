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

const STATUS = 403;

@staticImplements<Middleware>()
class Status403 {
  public static prepare(request: Request,): Request {
    return request;
  }

  public static process(response: Result,): void {
    if (typeof response.response.status === 'undefined') {
      throw new Error('Request returned no status',);
    }
    if (response.response.status !== STATUS) {
      throw new Error(
        `Request returned status ${ response.response.status }, not 403`,
      );
    }
  }
}
export default Status403;
