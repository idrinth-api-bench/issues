import Middleware from '../middleware.js';
import Result from '../result.js';
import Request from '../request.js';
import agent from '../helper/user-agent.js';
import staticImplements from '../helper/static-implements.js';

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
