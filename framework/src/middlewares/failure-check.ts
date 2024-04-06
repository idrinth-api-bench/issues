import staticImplements from '../helper/static-implements.js';
import Middleware from '../middleware.js';
import Result from '../result.js';
import language from '../helper/language.js';
import StandardResponse from '../standard-response.js';

/*
Below Document Defines the standards upon which most apis will be constructed
for failure scenarios:

1) JSEND - https://github.com/omniti-labs/jsend
{
  "status": "fail/error",
  "message":"Present only when status is error"
}

2) Another Common Format
{
  "success": false,
  "message": "Used mostly in case of error message,
  "error_code": 1308,
}
*/
const SUCCESS = 'success';

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
    if (response.status === SUCCESS) {
      throw new Error(
        language('response_not_failure', 'status', `${ response.status }`,),
      );
    }

    if (response.success === true) {
      throw new Error(
        language('response_not_failure', 'success', `${ response.success }`,),
      );
    }
  }
}
