import multiReporter from '../../src/reporter/multi-reporter';
import {
  expect,
} from 'chai';
import 'mocha';
import {unlinkSync,} from 'fs';

describe('reporter/multi-reporter', () => {
  it('should be a function', () => {
    expect(multiReporter,).to.be.a('function',);
  },);
  it('should have a method addReporter', () => {
    expect(multiReporter.addReporter,).to.be.a('function',);
  },);
  it('should execute all reporters', () => {
  const file1 = process.cwd() + '/result.csv';
  const file2 = process.cwd() + '/result.json';
    const results = {
      any: {
        id: '1',
        errors: 4,
        count: 7,
        avg100: 6,
        median100: 33,
        min100: 1,
        max100: 99,
        avg80: 76,
        median80: 33,
        min80: 14,
        max80: 99,
      },
    };
    multiReporter.addReporter(() => {
      throw new Error('Rep1',);
    },);
    expect(() => multiReporter(results,),).to.throw('Rep1',);
    unlinkSync(file1);
    unlinkSync(file2);
  },);
},);
