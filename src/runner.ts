import {
  parentPort,
} from 'worker_threads';
import {
  Result,
} from './result';
import {
  request,
} from 'needle';
import {
  Task,
} from './task';
import {
  Middleware,
} from './middleware';
import * as resolve from './helper/middleware-loader';

parentPort.on('message', (task: Task,) => {
  let quest = task.main;
  for (const middleware of task.pre) {
    const ware: Middleware = resolve(middleware,);
    quest = ware.prepare(quest,);
  }
  const start = process.hrtime();
  request(
    quest.method,
    quest.url,
    quest.body,
    {
      headers: quest.headers,
      cookies: quest.cookies,
    },
    (error, result,) => {
      if (error) {
        parentPort.postMessage({
          duration: null,
          id: task.id,
          success: false,
          msg: error,
          validators: [],
        },);
        return;
      }
      parentPort.postMessage(new Result(
        task.id,
        task.main.url,
        start,
        process.hrtime(),
        result,
        task.post || [],
      ),);
    },
  );
},);
