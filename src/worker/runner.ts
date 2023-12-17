import {
  Result,
} from '../result.js';
import {
  request,
} from 'needle';
import {
  Task,
} from '../task.js';
import {
  Middleware,
} from '../middleware.js';
import load from '../helper/middleware-loader.js';

interface Answer {
  duration: number;
  id: string;
  success: boolean;
  msg: string;
}
interface Callback {
  (arg: Answer,): void;
}

const send = (result: Result, msg: string, success: boolean,): Answer => ({
  duration: result.duration,
  id: result.id,
  success,
  msg,
});
const handlePre = async(task: Task,) => {
  if (task.pre) {
    for (const middleware of task.pre) {
      // eslint-disable-next-line no-await-in-loop
      const ware: Middleware = await load(middleware,);
      task.main = ware.prepare(task.main,);
    }
  }
  return task.main;
};
const handlePost = async(task: Task, res:Result, callable: Callback,) => {
  if (task.post) {
    for (const validator of task.post) {
      try {
        // eslint-disable-next-line no-await-in-loop
        const ware: Middleware = await load(validator,);
        ware.process(res,);
      } catch (er) {
        callable(send(res, er+'', false,),);
        return false;
      }
    }
  }
  return true;
};
export default async(task: Task, callable: Callback,): Promise<void> => {
  const quest = await handlePre(task,);
  const start = process.hrtime();
  request(
    quest.method,
    quest.url,
    quest.body,
    {
      headers: quest.headers,
      cookies: quest.cookies,
    },
    async(error, result,) => {
      if (error) {
        callable(send({
          duration: null,
          id: task.id,
          success: false,
          msg: error,
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
      if (await handlePost(task, res, callable,)) {
        callable(send(res, '', true,),);
      }
    },);
};
