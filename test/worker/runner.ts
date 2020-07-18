// eslint-disable-next-line @typescript-eslint/no-var-requires
const runner = require('../../src/worker/runner',);
import {
  expect,
} from 'chai';
import 'mocha';

describe('runner', () => {
  it('should be a function', () => {
    expect(runner,).to.be.a('function',);
  },);
},);
