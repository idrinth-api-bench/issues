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
import {
  HashMap,
} from '../hashmap';
import store from '../store';

const get = (
  fallback: string,
  body: HashMap,
  ...keys: Array<string>
): string => {
  for (const key of keys) {
    if (typeof body[key] === 'string') {
      return body[key];
    }
  }
  return fallback;
};

@staticImplements<Middleware>()
class Access {
  public static prepare(request: Request,): Request {
    const access = store.get('access', '',);
    const refresh = store.get('refresh', '',);
    if (access) {
      if (typeof request.body === 'string') {
        request.body = request.body.replace(
          /%refresh-token-middleware%/ug,
          refresh,
        );
        request.body = request.body.replace(
          /%access-token-middleware%/ug,
          access,
        );
      }
      if (typeof request.headers === 'undefined') {
        request.headers = {};
      }
      request.headers.authorization = `Bearer ${ access }`;
    }
    return request;
  }

  public static process(response: Result,): void {
    if (typeof response.response.headers === 'undefined') {
      return;
    }
    if (response.response.headers['content-type'] !== 'application/json') {
      return;
    }
    const body = JSON.parse(response.response.body,);
    let access = store.get('access', '',);
    let refresh = store.get('refresh', '',);
    access = get(access, body, 'access', 'access_token', 'access-token',);
    refresh = get(refresh, body, 'refresh', 'refresh_token', 'refresh-token',);
    store.set('access', access,);
    store.set('refresh', refresh,);
  }
}
export default Access;
