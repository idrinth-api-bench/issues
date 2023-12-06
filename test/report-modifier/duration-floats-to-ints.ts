import {
  expect,
} from 'chai';
import DurationFloatsToInts
  from '../../src/report-modifier/duration-floats-to-ints.js';
import 'mocha';
import {
  FinishedSet,
} from '../../src/finished-set';

describe('report-modifier/duration-floats-to-ints', () => {
  it('be a class', () => {
    expect(DurationFloatsToInts,).to.be.a('function',);
  },);
  const modifier = new DurationFloatsToInts();
  it('should have a method adjust', () => {
    // eslint-disable-next-line no-unused-expressions
    expect(modifier.adjust,).to.have;
    expect(modifier.adjust,).to.be.a('function',);
  },);
  it('adjust should ceil all durations', () => {
    const input: FinishedSet = {
      avg100: 0.1,
      avg80: 0.7,
      count: 1,
      errors: 0,
      id: 'id',
      max100: 10.9,
      max80: 0.0,
      median100: 0.9,
      median80: 0.4,
      min100: 0.99,
      min80: 9,
      stdv100: 0.0,
      stdv80: 0,
    };
    expect(modifier.adjust(input,),).to.deep.equal({
      avg100: 1,
      avg80: 1,
      count: 1,
      errors: 0,
      id: 'id',
      max100: 11,
      max80: 0,
      median100: 1,
      median80: 1,
      min100: 1,
      min80: 9,
      stdv100: 0,
      stdv80: 0,
    },);
  },);
},);
