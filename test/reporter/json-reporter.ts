import jsonReporter from '../../src/reporter/json-reporter.js';
import {
  expect,
} from 'chai';
import 'mocha';
import {
  existsSync, readFileSync,
} from 'fs';

const WAIT_TIME = 1500;

describe('reporter/json-reporter', () => {
  it('should be a function', () => {
    expect(jsonReporter,).to.be.a('function',);
  },);
  it('should create a json file', (done,) => {
    const file = '/json1/result.json';
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
        stdv80: 99,
        stdv100: 99,
      },
    };
    jsonReporter(results, '/json1',);
    setTimeout(() => {
      // eslint-disable-next-line no-unused-expressions
      expect(existsSync(file,),).to.be.true;
      done();
    }, WAIT_TIME,);
  },);
  it('should create a json file with matching contents', (done,) => {
    const file = '/json2/result.json';
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
    jsonReporter(results, '/json2',);
    setTimeout(() => {
      expect(readFileSync(file,) + '',).to.equal(JSON.stringify(results,),);
      done();
    }, WAIT_TIME,);
  },);
},);
