// eslint-disable-next-line @typescript-eslint/no-var-requires
const validator = require('../../src/worker/validator',);
import {
  expect,
} from 'chai';
import 'mocha';

describe('validator', () => {
  it('should be a function', () => {
    expect(validator,).to.be.a('function',);
  },);
},);
