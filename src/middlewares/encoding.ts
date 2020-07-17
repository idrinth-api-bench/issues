import {
  Middleware,
} from '../middleware';
import {
  Request,
} from '../request';
import formUrlEncoded from 'form-urlencoded';
import {
  Result,
} from '../result';
import staticImplements from '../helper/static-implements';

@staticImplements<Middleware>()
class Encoding {
  public static prepare(request: Request,): Request {
    if (request.autohandle === 'json') {
      request.body = JSON.stringify(request.body,);
      return request;
    }
    if (request.autohandle === 'form' && typeof request.body === 'object') {
      request.body = formUrlEncoded(request.body,);
    }
    return request;
  }

  public static process(response: Result,): void {
    //no task here
  }
}
export default Encoding;
