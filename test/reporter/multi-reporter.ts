import mock = require("mock-fs");
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
  before(() => {
    mock({
      '/multi': mock.directory({}),
    });
  });
  after(() => {
    mock.restore();
  });
  it('should be a function', () => {
    expect(multiReporter,).to.be.a('function',);
  },);
  it('should have a method addReporter', () => {
    expect(multiReporter.addReporter,).to.be.a('function',);
  },);
  it('should execute all reporters', () => {
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
    let wasExecuted = false;
    multiReporter.addReporter((localResults, rootDir) => {
      wasExecuted = true;
      expect(localResults,).to.deep.equal(results,);
      expect(rootDir,).to.equal('/multi');
    },)
    multiReporter(results, '/multi',);
    expect(wasExecuted).to.be.true;
  },);
},);
