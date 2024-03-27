import UserAgent from '../../src/middlewares/user-agent.js';
import {
  expect,
} from 'chai';
import 'mocha';
import Request from '../../src/request';

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
  it('prepare should add a user agent header', () => {
    expect(UserAgent.prepare(<Request>{},).headers['user-agent'],).to.be.a(
      'string',
    );
  },);
},);
