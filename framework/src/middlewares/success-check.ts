import staticImplements from '../helper/static-implements.js';
import Middleware from '../middleware.js';
import Result from '../result.js';
import language from '../helper/language.js';
import StandardResponse from '../standard-response.js';

const FAIL = 'fail';
const ERROR = 'error';

@staticImplements<Middleware>()
export default class SuccessCheck {
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

    if (response.status === FAIL || response.status === ERROR) {
      throw new Error(
        language('response_not_success', 'status', `${ response.status }`,),
      );
    }

    if (response.success === false) {
      throw new Error(
        language('response_not_success', 'success', `${ response.success }`,),
      );
    }
  }
}

/*
Below Document Defines the standards upon which most apis will be constructed

1) JSEND - https://github.com/omniti-labs/jsend
{
  "status": "success/fail/error",
  "data":{},
  "message":"Present only when status is error"
}

2) Another Common Format
{
  "success": false/true,
  "message": "Used mostly in case of error message,
  "error_code": 1308,
  "data": {}
}
*/
