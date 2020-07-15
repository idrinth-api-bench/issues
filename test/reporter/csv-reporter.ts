import CsvReporter from '../../src/reporter/csv-reporter';
import {
  expect,
} from 'chai';
import 'mocha';

describe('reporter/csv-reporter', () => {
  it('should be a function', () => {
    expect(CsvReporter,).to.be.a('function',);
  },);
},);
