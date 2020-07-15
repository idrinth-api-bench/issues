import UserAgent from '../../src/middlewares/user-agent';
import {
  expect,
} from 'chai';
import 'mocha';

describe('middlewares/user-agent', () => {
  it('should be a class', () => {
    expect(UserAgent,).to.be.a('function',);
  },);
  it('should have a static method prepare', () => {
    expect(UserAgent.prepare,).to.be.a('function',);
  },);
  it('should have a static method process', () => {
    expect(UserAgent.process,).to.be.a('function',);
  },);
},);
