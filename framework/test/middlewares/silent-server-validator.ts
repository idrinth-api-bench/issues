import SSV from '../../src/middlewares/silent-server-validator.js';
import {
  expect,
} from 'chai';
import 'mocha';
import {
  NeedleHttpVerbs,
} from 'needle';
import {
  Result,
} from '../../src/result';

describe('middlewares/silent-server-validator', () => {
  it('should be a class', () => {
    expect(SSV,).to.be.a('function',);
  },);
  it('should have a static method prepare', () => {
    expect(SSV.prepare,).to.be.a('function',);
  },);
  it('should have a static method process', () => {
    expect(SSV.process,).to.be.a('function',);
  },);
  it('process should not throw if there are no headers', () => {
    const input = {
      response: {
        // eslint-disable-next-line no-undefined
        status: undefined,
        headers: {},
        cookies: {},
        body: '',
        uri: '',
      },
      duration: 0,
      id: '',
      validators: [],
    };
    expect(
      () => SSV.process(input as Result,),
    ).to.not.throw();
  },);
  it('process should not throw if there is a Server header', () => {
    const input = {
      response: {
        // eslint-disable-next-line no-undefined
        status: undefined,
        headers: {
          Server: 'nginx',
        },
        cookies: {},
        body: '',
        uri: '',
      },
      duration: 0,
      id: '',
      validators: [],
    };
    expect(() => SSV.process(input as Result,),).to.throw(
      'The header Server is set. Remove this',
    );
  },);
  it('process should not throw if there is a X-Powered-By header', () => {
    const input = {
      response: {
        // eslint-disable-next-line no-undefined
        status: undefined,
        headers: {
          'X-Powered-By': 'php/8.1.2',
        },
        cookies: {},
        body: '',
        uri: '',
      },
      duration: 0,
      id: '',
      validators: [],
    };
    expect(() => SSV.process(input as Result,),).to.throw(
      'The header X-Powered-By is set. ' +
      'It shares critical information with the world.',
    );
  },);
  it('prepare should return input', () => {
    const input = {
      method: 'head' as NeedleHttpVerbs,
      headers: {},
      cookies: {},
      body: 'body',
      url: 'url',
    };
    expect(SSV.prepare(input,),).to.equal(input,);
  },);
},);
