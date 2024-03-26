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

const jsonCheck = new RegExp('^application/json', 'ui',);

@staticImplements<Middleware>()
export default class JsonValidator {
  public static prepare(request: Request,): Request {
    return request;
  }

  public static process(result: Result,): void {
    if (typeof result.response.headers['content-type'] === 'undefined') {
      throw Error(language('no_content_type',),);
    }
    const contentType = result.response.headers['content-type'];
    if (! jsonCheck.test(contentType)) {
      throw Error(language('no_json_content_type', contentType,),);
    }
    try {
      JSON.parse(result.response.body,);
    } catch (e) {
      throw Error(language('invalid_json_body', `${ e }`,),);
    }
  }
}
