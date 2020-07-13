import {
  parentPort,
} from 'worker_threads';
import {
  Result,
} from './result';
import {
  Middleware,
} from './middleware';

parentPort.on('message', (result: Result,) => {
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
