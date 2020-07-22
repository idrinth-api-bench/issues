/* eslint no-magic-numbers:0 */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const calculator = require('../../src/worker/calculator',);
import {
  expect,
} from 'chai';
import 'mocha';

describe('calculator', () => {
  it('should be a function', () => {
    expect(calculator,).to.be.a('function',);
  },);
  it('should return an empty set if not given data', () => {
    expect(calculator({
      id: '##',
      errors: 5,
      durations: [],
      count: 9,
    },),).to.deep.equal({
      id: '##',
      errors: 5,
      msgs: {},
      count: 9,
      avg100: NaN,
      median100: NaN,
      min100: NaN,
      max100: NaN,
      avg80: NaN,
      median80: NaN,
      min80: NaN,
      max80: NaN,
    },);
  },);
  it('should return a set if given data', () => {
    expect(calculator({
      id: '#1',
      errors: 5,
      msgs: {
        some: 5,
      },
      durations: [
        1,
        2,
        3,
        4,
      ],
      count: 9,
    },),).to.deep.equal({
      id: '#1',
      errors: 5,
      msgs: {
        some: 5,
      },
      count: 9,
      avg100: 3,
      median100: 3,
      min100: 1,
      max100: 4,
      avg80: 3,
      median80: 3,
      min80: 1,
      max80: 4,
    },);
  },);
  it('should return a result if given data', () => {
    expect(calculator({
      id: 'k#1',
      errors: 5,
      msgs: {
        some: 5,
      },
      durations: [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        23,
        343,
        32,
        2,
        2,
      ],
      count: 15,
    },),).to.deep.equal({
      id: 'k#1',
      errors: 5,
      msgs: {
        some: 5,
      },
      count: 15,
      avg100: 30,
      median100: 172,
      min100: 1,
      max100: 343,
      avg80: 9,
      median80: 17,
      min80: 2,
      max80: 32,
    },);
  },);
},);
