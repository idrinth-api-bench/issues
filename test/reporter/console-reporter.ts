import ConsoleReporter from '../../src/reporter/console-reporter';
import {
  expect,
} from 'chai';
import 'mocha';

describe('reporter/console-reporter', () => {
  it('should be a function', () => {
    expect(ConsoleReporter,).to.be.a('function',);
  },);
},);
