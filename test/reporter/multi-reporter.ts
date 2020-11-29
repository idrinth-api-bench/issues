import MultiReporter from '../../src/reporter/multi-reporter';
import CsvReporter from '../../src/reporter/csv-reporter';
import JsonReporter from '../../src/reporter/json-reporter';
import * as mock from 'mock-fs';
import {
  expect,
} from 'chai';
import 'mocha';
import {
  existsSync,
} from 'fs';

const ONE_SECOND = 1000;

describe('reporter/multi-reporter', () => {
  const multiReporter = new MultiReporter();
  it('should be a function', () => {
    expect(multiReporter,).to.be.a('object',);
  },);
  it('should have a method addReporter', () => {
    expect(multiReporter.addReporter,).to.be.a('function',);
  },);
  it('should execute no reporters', (done,) => {
    mock();
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
    multiReporter.report(results,);
    // eslint-disable-next-line no-unused-expressions
    expect(existsSync(file2,),).to.be.false;
    setTimeout(() => {
      // eslint-disable-next-line no-unused-expressions
      expect(existsSync(file1,),).to.be.false;
      mock.restore();
      done();
    }, ONE_SECOND,);
  },);
  it('should execute all reporters', (done,) => {
    mock();
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
    multiReporter.addReporter(new CsvReporter(),);
    multiReporter.addReporter(new JsonReporter(),);
    multiReporter.report(results,);
    // eslint-disable-next-line no-unused-expressions
    expect(existsSync(file2,),).to.be.true;
    setTimeout(() => {
      // eslint-disable-next-line no-unused-expressions
      expect(existsSync(file1,),).to.be.true;
      mock.restore();
      done();
    }, ONE_SECOND,);
  },);
},);
