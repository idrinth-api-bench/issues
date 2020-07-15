import Encoding from '../../src/middlewares/encoding';
import {
  expect,
} from 'chai';
import 'mocha';

describe('middlewares/encoding', () => {
  it('should be a class', () => {
    expect(Encoding,).to.be.a('function',);
  },);
  it('should have a static method prepare', () => {
    expect(Encoding.prepare,).to.be.a('function',);
  },);
  it('should have a static method process', () => {
    expect(Encoding.process,).to.be.a('function',);
  },);
},);
