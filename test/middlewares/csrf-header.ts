import CsrfHeader from '../../src/middlewares/csrf-header';
import {
  expect,
} from 'chai';
import 'mocha';
import {
  Request,
} from '../../src/request';
import {
  Result,
} from '../../src/result';

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
    expect(CsrfHeader.prepare(<Request>{},),).to.deep.equal({
      headers: {},
    },);
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
  it('should set token it has', () => {
    expect(CsrfHeader.prepare(<Request>{},),).to.deep.equal({
      headers: {
        'x-csrf-token': 'def',
      },
    },);
  },);
},);
