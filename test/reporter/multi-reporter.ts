import multiReporter from '../../src/reporter/multi-reporter.js';
import {
  expect,
} from 'chai';
import 'mocha';
import {
  existsSync,
} from 'fs';
import makeConsoleMock from 'consolemock';

const ONE_SECOND = 1500;
const SINGLE_ENTRY = 1;

describe('reporter/multi-reporter', () => {
  it('should be a function', () => {
    expect(multiReporter,).to.be.a('function',);
  },);
  it('should have a method addReporter', () => {
    expect(multiReporter.addReporter,).to.be.a('function',);
  },);
  it('should execute all reporters', (done,) => {
    const file1 = '/multi/result.csv';
    const file2 = '/multi/result.json';
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
        stdv80: 99,
        stdv100: 99,
      },
    };
    const oldConsole = console;
    // eslint-disable-next-line no-global-assign
    console = makeConsoleMock();
    multiReporter(results, '/multi',);
    setTimeout(() => {
      // eslint-disable-next-line no-console
      const history = console.history();
      expect(history,).to.be.an('array',);
      expect(history.length,).to.equal(SINGLE_ENTRY,);
      // eslint-disable-next-line no-unused-expressions
      expect(existsSync(file1,),).to.be.true;
      // eslint-disable-next-line no-unused-expressions
      expect(existsSync(file2,),).to.be.true;
      // eslint-disable-next-line no-global-assign
      console = oldConsole;
      done();
    }, ONE_SECOND,);
  },);
},);
