import Cookie from '../../src/middlewares/cookie';
import {
  expect,
} from 'chai';
import 'mocha';

describe('middlewares/cookie', () => {
  it('should be a class', () => {
    expect(Cookie,).to.be.a('function',);
  },);
  it('should have a static method prepare', () => {
    expect(Cookie.prepare,).to.be.a('function',);
  },);
  it('should have a static method process', () => {
    expect(Cookie.process,).to.be.a('function',);
  },);
},);
