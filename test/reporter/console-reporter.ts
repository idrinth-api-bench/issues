import consoleReporter from '../../src/reporter/console-reporter';
import {
  expect,
} from 'chai';
import 'mocha';

describe('reporter/console-reporter', () => {
  it('should be a function', () => {
    expect(consoleReporter,).to.be.a('function',);
  },);
  it('should not throw an error', () => {
    const results = {
      any: {
        id: '1',
        errors: 4,
        count: 7,
        avg100: 6,
        median100: 33,
        min100: 1,
        max100: 199,
        avg80: 6,
        median80: 33,
        min80: 12,
        max80: 99,
        stdv80: 12,
        stdv100: 99,
      },
    };
    expect(() => consoleReporter(results,),).to.not.throw();
  },);
},);
