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
  (arg: Answer,): void;
}
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

export = (task: Task, callable: Callback,): void => {
  let quest = task.main;
  if (task.pre) {
    for (const middleware of task.pre) {
      const ware: Middleware = resolve(middleware,);
      quest = ware.prepare(quest,);
    }
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
        callable(send({
          duration: null,
          id: task.id,
          success: false,
          msg: error,
          // eslint-disable-next-line no-undefined
          response: undefined,
          validators: [],
        } as Result, error+'', false,),);
        return;
      }
      const res = new Result(
        task.id,
        task.main.url,
        start,
        process.hrtime(),
        result,
        task.post || [],
      );
      for (const validator of task.post) {
        try {
          const ware: Middleware = resolve(validator,);
          ware.process(res,);
        } catch (er) {
          callable(send(res, er+'', false,),);
          return;
        }
      }
      callable(send(res, '', true,),);
    },);
};
