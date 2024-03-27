import Access from '../../src/middlewares/access-token.js';
import {
  expect,
} from 'chai';
import 'mocha';
import Request from '../../src/request.js';
import Result from '../../src/result.js';

describe('middlewares/csrf-header', () => {
  it('should be a class', () => {
    expect(Access,).to.be.a('function',);
  },);
  it('should have a static method prepare', () => {
    expect(Access.prepare,).to.be.a('function',);
  },);
  it('should have a static method process', () => {
    expect(Access.process,).to.be.a('function',);
  },);
  it('should not set token by default', () => {
    expect(Access.prepare(<Request>{},),).to.deep.equal({},);
  },);
  it('should get token by default', () => {
    expect(() => Access.process(<Result><unknown>{
      response: {
        headers: {
          'content-type': 'application/json',
        },
        body: '{"access":"11"}',
      },
    },),).to.not.throw();
  },);
  it('should set token it has', () => {
    expect(Access.prepare(<Request>{},),).to.deep.equal({
      headers: {
        'authorization': 'Bearer 11',
      },
    },);
  },);
  it('should change no token if the response is incomplete', () => {
    expect(() => Access.process(<Result><unknown>{
      response: {},
    },),).to.not.throw();
  },);
  it('should set token it has', () => {
    expect(Access.prepare(<Request>{},),).to.deep.equal({
      headers: {
        'authorization': 'Bearer 11',
      },
    },);
  },);
  it('should get refresh-token by default', () => {
    expect(() => Access.process(<Result><unknown>{
      response: {
        headers: {
          'content-type': 'application/json',
        },
        body: '{"refresh-token":"1k"}',
      },
    },),).to.not.throw();
  },);
  it('should set all tokens it has', () => {
    expect(Access.prepare(<Request>{
      body: '%refresh-token-middleware%%access-token-middleware%',
    },),).to.deep.equal({
      headers: {
        'authorization': 'Bearer 11',
      },
      body: '1k11',
    },);
  },);
},);
