import cli from '../src/cli.js';
import {
  use as useChai,
  expect,
} from 'chai';
import chaiAsPromised from 'chai-as-promised';
import 'mocha';

useChai(chaiAsPromised,);

describe('cli', () => {
  it('should be a function', () => {
    expect(cli,).to.be.a('function',);
  },);
  it('cli() throw when given 0 total tasks', () => {
    expect(cli([
      '0',
      '0',
    ],),).to.eventually.be.rejectedWith();
  },);
},);
