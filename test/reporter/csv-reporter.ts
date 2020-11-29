import csvReporter from '../../src/reporter/csv-reporter';
import * as mock from 'mock-fs';
import {
  expect,
} from 'chai';
import 'mocha';
import {
  existsSync, readFileSync,
} from 'fs';

const ONE_SECOND = 1000;

describe('reporter/csv-reporter', () => {
  const file = process.cwd() + '/result.csv';
  it('should be a function', () => {
    expect(csvReporter,).to.be.a('function',);
  },);
  it('should create a csv file', (done,) => {
    mock();
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
      },
    };
    new csvReporter().report(results,);
    setTimeout(() => {
      // eslint-disable-next-line no-unused-expressions
      expect(existsSync(file,),).to.be.true;
      mock.restore();
      done();
    }, ONE_SECOND,);
  },);
  it('should create a csv file with matching contents', (done,) => {
    mock();
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
      },
    };
    new csvReporter().report(results,);
    setTimeout(() => {
      expect(readFileSync(file,) + '',).to.equal(
        'id,errors,count,avg100,median100,min100,'
        + 'max100,avg80,median80,min80,max80'
        + '\n1,14,7,6,33,1,99,76,33,14,99',
      );
      mock.restore();
      done();
    }, ONE_SECOND,);
  },);
},);
