import {
  Request,
} from './request';

export interface Task {
  id: string;
  pre?: Array<string>;
  post?: Array<string>;
  main: Request;
}
