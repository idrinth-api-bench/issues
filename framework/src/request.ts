import {
  HashMap,
} from './hashmap.js';
import {
  NeedleHttpVerbs,
} from 'needle';

interface FormContent {
  [key: string]: string|FormContent;
}

type SimpleType = string|null|number|boolean;
interface JsonContent {
  [key: string]: SimpleType|JsonContent|Array<SimpleType|JsonContent>;
  [key: number]: SimpleType|JsonContent|Array<SimpleType|JsonContent>;
}

export interface Request {
  method: NeedleHttpVerbs;
  headers?: HashMap;
  cookies?: HashMap;
  body?: string|FormContent|JsonContent;
  autohandle?: 'json'|'form';
  url: string;
  maxDuration?: number|undefined;
}
