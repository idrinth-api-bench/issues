import Request from './request.js';

export interface Task {
  id: string;
  pre?: Array<string>;
  post?: Array<string>;
  main: Request;
}

export default Task;
