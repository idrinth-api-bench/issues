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

const MAXIMUM = 299;
const MINIMUM = 200;

@staticImplements<Middleware>()
class Status2xx {
  public static prepare(request: Request,): Request {
    return request;
  }

  public static process(response: Result,): void {
    if (typeof response.response.status === 'undefined') {
      throw new Error('Request returned no status',);
    }
    if (response.response.status > MAXIMUM) {
      throw new Error('Request returned status above 200-299 range',);
    }
    if (response.response.status < MINIMUM) {
      throw new Error('Request returned status below 200-299 range',);
    }
  }
}
export default Status2xx;
