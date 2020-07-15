import {
  NeedleResponse,
} from 'needle';
import {
  HashMap,
} from './hashmap';

const ToMicro = 1000000000;

export class Result {
  public duration: number;

  public response: {
    headers:HashMap;
    cookies:HashMap;
    body:string;
    uri:string;
    status:number;
  };

  // eslint-disable-next-line max-params
  public constructor(
    public id: string,
    uri: string,
    start: Array<number>,
    end: Array<number>,
    response: NeedleResponse,
    public validators:Array<string>,
  ) {
    this.duration = (end.shift() - start.shift()) * ToMicro;
    this.duration += end.pop() - start.pop();
    this.response = {
      body: response.raw.toString(),
      uri,
      headers: {},
      cookies: response.cookies || {},
      status: response.statusCode,
    };
    for (const header in response.headers) {
      if (typeof response.headers[header] === 'string') {
        this.response.headers[header] = response.headers[header] as string;
      }
    }
  }
}
