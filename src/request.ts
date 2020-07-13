import {
  HashMap,
} from './hashmap';
import {
  NeedleHttpVerbs,
} from 'needle';

export interface Request {
  method: NeedleHttpVerbs,
  headers: HashMap,
  cookies: HashMap,
  body: string|FormContent|JsonContent,
  autohandle?: 'json'|'form',
  url: string
}

type Json = string|JsonContent|null|number|boolean;
interface FormContent {
  [key: string]: string|FormContent
}
interface JsonContent {
  [key: string]: Json|Array<Json>;
  [key: number]: Json|Array<Json>;
}
