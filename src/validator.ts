import {
  Result,
} from './result';
import {
  Middleware,
} from './middleware';
import * as resolve from './helper/middleware-loader';

interface Answer {
  duration: number;
  id: string;
  success: boolean;
  msg: string;
}

const send = (result: Result, msg: string, success: boolean,): Answer => ({
  duration: result.duration,
  id: result.id,
  success,
  msg,
});
export = (result: Result&{success?: boolean;msg?: string},): Answer => {
  if (typeof result.success === 'boolean' && result.success === false) {
    //an error on some lower level
    return send(result, result.msg+'', false,);
  }
  for (const validator of result.validators) {
    try {
      const ware: Middleware = resolve(validator,);
      ware.process(result,);
    } catch (error) {
      return send(result, error+'', false,);
    }
  }
  return send(result, '', true,);
};
