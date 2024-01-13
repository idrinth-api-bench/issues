import CsrfHeader from '../../src/middlewares/csrf-header.js';
import {
  expect,
} from 'chai';
import 'mocha';
import {
  Request,
} from '../../src/request.js';
import {
  Result,
} from '../../src/result.js';

describe('middlewares/csrf-header', () => {
  it('should be a class', () => {
    expect(CsrfHeader,).to.be.a('function',);
  },);
  it('should have a static method prepare', () => {
    expect(CsrfHeader.prepare,).to.be.a('function',);
  },);
  it('should have a static method process', () => {
    expect(CsrfHeader.process,).to.be.a('function',);
  },);
  it('should not set token by default', () => {
    expect(CsrfHeader.prepare(<Request>{},),).to.deep.equal({},);
  },);
  it('should get token by default', () => {
    expect(() => CsrfHeader.process(<Result><unknown>{
      response: {
        headers: {
          'x-csrf-token': 'def',
        },
      },
    },),).to.not.throw();
  },);
  it('should set token it has', () => {
    expect(CsrfHeader.prepare(<Request>{},),).to.deep.equal({
      headers: {
        'x-csrf-token': 'def',
      },
    },);
  },);
  it('should change no token if there\'s none', () => {
    expect(() => CsrfHeader.process(<Result><unknown>{
      response: {
        headers: {},
      },
    },),).to.not.throw();
  },);
  it('should change no token if the response is incomplete', () => {
    expect(() => CsrfHeader.process(<Result><unknown>{
      response: {},
    },),).to.not.throw();
  },);
  it('should set token it has', () => {
    expect(CsrfHeader.prepare(<Request>{},),).to.deep.equal({
      headers: {
        'x-csrf-token': 'def',
      },
    },);
  },);
},);
