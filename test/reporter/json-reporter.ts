import JsonReporter from '../../src/reporter/json-reporter';
import {
  expect,
} from 'chai';
import 'mocha';

describe('reporter/json-reporter', () => {
  it('should be a function', () => {
    expect(JsonReporter,).to.be.a('function',);
  },);
},);
