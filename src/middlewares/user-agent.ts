import {
  Middleware,
} from '../middleware';
import {
  Result,
} from '../result';
import {
  Request,
} from '../request';
import agent from '../helper/user-agent';
import staticImplements from '../helper/static-implements';

@staticImplements<Middleware>()
class UserAgent {
  public static prepare(request: Request,): Request {
    if (typeof request.headers === 'undefined') {
      request.headers = {};
    }
    if (! request.headers['user-agent']) {
      request.headers['user-agent'] = agent;
    }
    return request;
  }

  public static process(response: Result,): void {
    // noop
  }
}
export default UserAgent;
