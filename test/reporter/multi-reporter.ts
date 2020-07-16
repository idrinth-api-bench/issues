import MultiReporter from '../../src/reporter/multi-reporter';
import {
  expect,
} from 'chai';
import 'mocha';

describe('reporter/multi-reporter', () => {
  it('should be a function', () => {
    expect(MultiReporter,).to.be.a('function',);
  },);
  it('should have a method addReporter', () => {
    expect(MultiReporter.addReporter,).to.be.a('function',);
  },);
},);
