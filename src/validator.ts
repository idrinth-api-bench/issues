import {
  parentPort,
} from 'worker_threads';
import {
  Result,
} from './result';
import {
  Middleware,
} from './middleware';
import * as resolve from './helper/middleware-loader';

const send = (result: Result, msg: string, success: boolean,): void => {
  parentPort.postMessage({
    duration: result.duration,
    id: result.id,
    success,
    msg,
  },);
};
parentPort.on('message', (result: Result&{success?: boolean;msg?:string},) => {
  if (typeof result.success === 'boolean' && result.success === false) {
    //an error on some lower level
    send(result, result.msg+'', false,);
    return;
  }
  for (const validator of result.validators) {
    try {
      const ware: Middleware = resolve(validator,);
      ware.process(result,);
    } catch (error) {
      send(result, error+'', false,);
    }
  }
  send(result, '', true,);
},);
