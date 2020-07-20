import {
  Result,
} from '../result';
import {
  request,
} from 'needle';
import {
  Task,
} from '../task';
import {
  Middleware,
} from '../middleware';
import * as resolve from '../helper/middleware-loader';

interface Callback {
  (arg: Result,): void;
}

export = (task: Task, callable: Callback,): void => {
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
      callable(error ? {
        duration: null,
        id: task.id,
        success: false,
        msg: error,
        // eslint-disable-next-line no-undefined
        response: undefined,
        validators: [],
      } as Result : new Result(
        task.id,
        task.main.url,
        start,
        process.hrtime(),
        result,
        task.post || [],
      ),);
    },
  );
};
