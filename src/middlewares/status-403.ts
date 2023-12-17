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

const STATUS = 403;

@staticImplements<Middleware>()
class Status403 {
  public static prepare(request: Request,): Request {
    return request;
  }

  public static process(response: Result,): void {
    if (typeof response.response.status === 'undefined') {
      throw new Error(language('no_response_status',),);
    }
    if (response.response.status !== STATUS) {
      throw new Error(language(
        'response_status_not_403',
        `${ response.response.status }`,
      ),);
    }
  }
}
export default Status403;
