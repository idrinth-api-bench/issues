import CsrfHeader from '../../src/middlewares/csrf-header';
import {
  expect,
} from 'chai';
import 'mocha';

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
},);
