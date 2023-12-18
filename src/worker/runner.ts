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

const buildAnswer = (
  result: Result,
  msg: string,
  success: boolean,
): Answer => ({
  duration: result.duration,
  id: result.id,
  success,
  msg,
});
const handlePre = async(task: Task,) => {
  if (task.pre) {
    for (const middleware of task.pre) {
      // eslint-disable-next-line no-await-in-loop
      const requestMiddleware: Middleware = await load(middleware,);
      task.main = requestMiddleware.prepare(task.main,);
    }
  }
  return task.main;
};
const handlePost = async(task: Task, res:Result, callable: Callback,) => {
  if (task.post) {
    for (const validator of task.post) {
      try {
        // eslint-disable-next-line no-await-in-loop
        const validatorMiddleware: Middleware = await load(validator,);
        validatorMiddleware.process(res,);
      } catch (er) {
        callable(buildAnswer(res, er+'', false,),);
        return false;
      }
    }
  }
  return true;
};
export default async(task: Task, callable: Callback,): Promise<void> => {
  const requestConfig = await handlePre(task,);
  const startTime = process.hrtime();
  request(
    requestConfig.method,
    requestConfig.url,
    requestConfig.body,
    {
      headers: requestConfig.headers,
      cookies: requestConfig.cookies,
    },
    async(error, result,) => {
      if (error) {
        callable(buildAnswer({
          duration: null,
          id: task.id,
          success: false,
          msg: error,
          validators: [],
        } as Result, error+'', false,),);
        return;
      }
      const httpResult = new Result(
        task.id,
        task.main.url,
        startTime,
        process.hrtime(),
        result,
        task.post || [],
      );
      if (await handlePost(task, httpResult, callable,)) {
        callable(buildAnswer(httpResult, '', true,),);
      }
    },);
};
