import JsonValidator from '../../src/middlewares/json-validator.js';
import {
  expect,
} from 'chai';
import 'mocha';

describe('middlewares/json-validator', () => {
  it('should be a class', () => {
    expect(JsonValidator,).to.be.a('function',);
  },);
  it('.prepare() should be a function', () => {
    expect(JsonValidator.prepare,).to.be.a('function',);
  },);
  it('.prepare() should return unchanged param', () => {
    const param = {
      method: 'get',
      url: 'https://localhost',
    };
    expect(JsonValidator.prepare(param),).to.be.equal(param,);
  },);
  it('.process() should be a function', () => {
    expect(JsonValidator.process,).to.be.a('function',);
  },);
},);
