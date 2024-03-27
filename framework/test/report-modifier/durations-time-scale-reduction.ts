import {
  expect,
} from 'chai';
import DurationTimeScaleReduction
  from '../../src/report-modifier/durations-time-scale-reduction.js';
import 'mocha';
import FinishedSet from '../../src/finished-set';

describe('report-modifier/duration-floats-to-ints', () => {
  it('be a class', () => {
    expect(DurationTimeScaleReduction,).to.be.a('function',);
  },);
  const modifier = new DurationTimeScaleReduction();
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
      avg100: 0.0001,
      avg80: 0.0007,
      count: 1,
      errors: 0,
      id: 'id',
      max100: 0.0109,
      max80: 0,
      median100: 0.0009,
      median80: 0.0004,
      min100: 0.00099,
      min80: 0.009,
      stdv100: 0,
      stdv80: 0,
    },);
  },);
},);
