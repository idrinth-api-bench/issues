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
import language from '../helper/language.js';

const MAXIMUM = 299;
const MINIMUM = 200;

@staticImplements<Middleware>()
class Status2xx {
  public static prepare(request: Request,): Request {
    return request;
  }

  public static process(response: Result,): void {
    if (typeof response.response.status === 'undefined') {
      throw new Error(language('no_response_status',),);
    }
    if (response.response.status > MAXIMUM) {
      throw new Error(language('response_status_above_2xx',),);
    }
    if (response.response.status < MINIMUM) {
      throw new Error(language('response_status_below_2xx',),);
    }
  }
}
export default Status2xx;
