import staticImplements from '../helper/static-implements.js';
import Middleware from '../middleware.js';
import Result from '../result.js';
import language from '../helper/language.js';
import StandardResponse from '../standard-response.js';

const FAIL = 'fail';
const ERROR = 'error';

@staticImplements<Middleware>()
export default class FailureCheck {
  public static prepare(request: Request,): Request {
    return request;
  }

  public static process(result: Result,): void {
    let response: StandardResponse;
    try {
      response = JSON.parse(result.response.body,);
    } catch (e) {
      throw Error(language('invalid_json_body', `${ e }`,),);
    }
    if (! (response.status === FAIL || response.status === ERROR)) {
      throw new Error(
        language('response_not_failure', 'status', `${ response.status }`,),
      );
    }

    if (response.success !== false) {
      throw new Error(
        language('response_not_failure', 'success', `${ response.success }`,),
      );
    }
  }
}
