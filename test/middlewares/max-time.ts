import MaxTime from '../../src/middlewares/max-time.js';
import {
  expect,
} from 'chai';
import 'mocha';
import {
  Result,
} from '../../src/result.js';

describe('middlewares/max-time', () => {
  it('should be a class', () => {
    expect(MaxTime,).to.be.a('function',);
  },);
  describe('.prepare()', () => {
    it('should be a function', () => {
      expect(MaxTime.prepare,).to.be.a('function',);
    },);
    it('should return the unchanged param', () => {
      const param = {
        method: 'get',
        url: 'https://localhost',
      };
      expect(MaxTime.prepare(param,),).to.be.equal(param,);
    },);
  },);
  describe('.process()', () => {
    it('should be a function', () => {
      expect(MaxTime.process,).to.be.a('function',);
    },);
    it('should throw if the response is too slow', () => {
      const response: Result = {
        id: 'example',
        validators: [],
        duration: 234242,
        maxDuration: 193,
        response: {
          headers: {},
          cookies: {},
          uri: '',
          status: 0,
          body: '',
        },
      };
      expect(() => MaxTime.process(response,),)
        .to.throw(
          'The response time was above 193 ns',
        );
    },);
    it('should not throw if the response is fast enough', () => {
      const response: Result = {
        id: 'example',
        validators: [],
        duration: 234242,
        maxDuration: 234242,
        response: {
          headers: {},
          cookies: {},
          uri: '',
          status: 0,
          body: '',
        },
      };
      expect(() => MaxTime.process(response,),).to.not.throw();
    },);
  },);
},);
