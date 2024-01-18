import mock = require('mock-fs');
import csvReporter from '../../src/reporter/csv-reporter.js';
import {
  expect,
} from 'chai';
import 'mocha';
import {
  readFileSync,
} from 'fs';

const WAIT_TIME = 1500;

describe('reporter/csv-reporter', () => {
  before(() => {
    mock({
      '/csv1': mock.directory({},),
      '/csv2': mock.directory({},),
    },);
  },);
  after(() => {
    mock.restore();
  },);
  it('should be a function', () => {
    expect(csvReporter,).to.be.a('function',);
  },);
  it('should create a csv file', (done,) => {
    const file = '/csv1/result.csv';
    const results = {
      any: {
        id: '1',
        errors: 4,
        count: 2,
        avg100: 6,
        median100: 33,
        min100: 1,
        max100: 199,
        avg80: 6,
        median80: 33,
        min80: 12,
        max80: 99,
        stdv100: 9,
        stdv80: 8,
      },
    };
    csvReporter(results, '/csv1',);
    setTimeout(() => {
      // eslint-disable-next-line no-unused-expressions
      expect(readFileSync(file,) + '',).to.not.be.empty;
      done();
    }, WAIT_TIME,);
  },);
  it('should create a csv file with matching contents', (done,) => {
    const file = '/csv2/result.csv';
    const results = {
      any: {
        id: '1',
        errors: 14,
        count: 7,
        avg100: 6,
        median100: 33,
        min100: 1,
        max100: 99,
        avg80: 76,
        median80: 33,
        min80: 14,
        max80: 99,
        stdv100: 9,
        stdv80: 8,
      },
    };
    csvReporter(results, '/csv2',);
    setTimeout(() => {
      expect(readFileSync(file,) + '',).to.equal(
        'id,errors,count,avg100,median100,min100,'
        + 'max100,avg80,median80,min80,max80,stdv100,stdv80,msgs'
        + '\n1,14,7,6,33,1,99,76,33,14,99,9,8,',
      );
      done();
    }, WAIT_TIME,);
  },);
},);
