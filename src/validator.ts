import {
  parentPort,
} from 'worker_threads';
import {
  Result,
} from './result';
import {
  Middleware,
} from './middleware';

parentPort.on('message', (result: Result&{success?: boolean;msg?:string},) => {
  if (typeof result.success === 'boolean' && typeof result.msg !== 'undefined' && result.success === false) {
    //an error on some lower level
    parentPort.postMessage({
        duration: result.duration,
        id: result.id,
        success: false,
        msg: result.msg+"",
      });
    return;
  }
  for (const validator of result.validators) {
    try {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const ware: Middleware = require(validator,).default;
      ware.process(result,);
    } catch (error) {
      parentPort.postMessage({
        duration: result.duration,
        id: result.id,
        success: false,
        msg: error+'',
      },);
    }
  }
  parentPort.postMessage({
    duration: result.duration,
    id: result.id,
    success: true,
  },);
},);
