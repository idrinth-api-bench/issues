import jsonReporter from '../../src/reporter/json-reporter';
import {
  expect,
} from 'chai';
import 'mocha';
import {
  existsSync, readFileSync,
} from 'fs';

describe('reporter/json-reporter', () => {
  const file = process.cwd() + '/result.json';
  it('should be a function', () => {
    expect(jsonReporter,).to.be.a('function',);
  },);
  it('should create a json file', () => {
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
      },
    };
    jsonReporter(results,);
    // eslint-disable-next-line no-unused-expressions
    expect(existsSync(file,),).to.be.true;
  },);
  it('should create a json file with matching contents', () => {
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
    jsonReporter(results,);
    expect(readFileSync(file,) + '',).to.equal(JSON.stringify(results,),);
  },);
},);
