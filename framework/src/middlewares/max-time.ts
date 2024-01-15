import staticImplements from '../helper/static-implements.js';
import {
  Middleware,
} from '../middleware.js';
import {
  Request,
} from '../request.js';
import {
  Result,
} from '../result.js';
import language from '../helper/language.js';

@staticImplements<Middleware>()
export default class MaxTime {
  public static prepare(request: Request,): Request {
    return request;
  }

  public static process(result: Result,): void {
    if (typeof result.maxDuration !== 'number') {
      return;
    }
    if (result.duration > result.maxDuration) {
      throw new Error(language('too_slow', `${ result.maxDuration }`,),);
    }
  }
}
