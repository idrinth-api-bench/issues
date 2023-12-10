/* eslint no-magic-numbers: 0 */
import Status403 from '../../src/middlewares/status-403.js';
import {
  expect,
} from 'chai';
import 'mocha';
import {
  NeedleHttpVerbs,
} from 'needle';

describe('middlewares/status-403', () => {
  it('should be a class', () => {
    expect(Status403,).to.be.a('function',);
  },);
  it('should have a static method prepare', () => {
    expect(Status403.prepare,).to.be.a('function',);
  },);
  it('should have a static method process', () => {
    expect(Status403.process,).to.be.a('function',);
  },);
  for (let i=100; i<403; i ++) {
    it(`process should throw for status ${ i }`, () => {
      const input = {
        response: {
          status: i,
          headers: {},
          cookies: {},
          body: '',
          uri: '',
        },
        duration: 0,
        id: '',
        validators: [],
      };
      expect(() => Status403.process(input,),).to.throw(
        `Request returned status ${ i }, not 403`,
      );
    },);
  }
  it(`process should not throw for status 403`, () => {
    const input = {
      response: {
        status: 403,
        headers: {},
        cookies: {},
        body: '',
        uri: '',
      },
      duration: 0,
      id: '',
      validators: [],
    };
    expect(() => Status403.process(input,),).to.not.throw();
  },);
  for (let i=404; i<1000; i ++) {
    it(`process should throw for status ${ i }`, () => {
      const input = {
        response: {
          status: i,
          headers: {},
          cookies: {},
          body: '',
          uri: '',
        },
        duration: 0,
        id: '',
        validators: [],
      };
      expect(() => Status403.process(input,),).to.throw(
        `Request returned status ${ i }, not 403`,
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
    expect(() => Status403.process(input,),).to.throw(
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
    expect(Status403.prepare(input,),).to.equal(input,);
  },);
},);
