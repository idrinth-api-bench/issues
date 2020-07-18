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
},);
