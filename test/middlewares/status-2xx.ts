/* eslint no-magic-numbers: 0 */
import Status2xx from '../../src/middlewares/status-2xx';
import {
  expect,
} from 'chai';
import 'mocha';
import {
  NeedleHttpVerbs,
} from 'needle';

describe('middlewares/status-2xx', () => {
  it('should be a class', () => {
    expect(Status2xx,).to.be.a('function',);
  },);
  it('should have a static method prepare', () => {
    expect(Status2xx.prepare,).to.be.a('function',);
  },);
  it('should have a static method process', () => {
    expect(Status2xx.process,).to.be.a('function',);
  },);
  for (let i=0; i<100; i ++) {
    it(`process should throw for status ${ 100+i }`, () => {
      const input = {
        response: {
          status: 100+i,
          headers: {},
          cookies: {},
          body: '',
          uri: '',
        },
        duration: 0,
        id: '',
        validators: [],
      };
      expect(() => Status2xx.process(input,),).to.throw(
        'Request returned status below 200-299 range',
      );
    },);
  }
  for (let i=0; i<100; i ++) {
    it(`process should not throw for status ${ 200+i }`, () => {
      const input = {
        response: {
          status: 200+i,
          headers: {},
          cookies: {},
          body: '',
          uri: '',
        },
        duration: 0,
        id: '',
        validators: [],
      };
      expect(() => Status2xx.process(input,),).to.not.throw();
    },);
  }
  for (let i=0; i<700; i ++) {
    it(`process should throw for status ${ 300+i }`, () => {
      const input = {
        response: {
          status: 300+i,
          headers: {},
          cookies: {},
          body: '',
          uri: '',
        },
        duration: 0,
        id: '',
        validators: [],
      };
      expect(() => Status2xx.process(input,),).to.throw(
        'Request returned status above 200-299 range',
      );
    },);
  }
  it('process should throw for undefined status', () => {
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
    expect(() => Status2xx.process(input,),).to.throw(
      'Request returned no status',
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
    expect(Status2xx.prepare(input,),).to.equal(input,);
  },);
},);
