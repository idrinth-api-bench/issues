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
import {
  XMLValidator,
} from 'fast-xml-parser';

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
    if (! contentType.match(/\/xml/ui,)) {
      throw Error(language('no_xml_content_type', contentType,),);
    }
    if (XMLValidator.validate(result.response.body,) !== true) {
      throw Error(language('invalid_xml_body',),);
    }
  }
}
