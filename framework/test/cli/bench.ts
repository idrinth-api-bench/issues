import cli from '../../src/cli/bench.js';
import {
  expect,
} from 'chai';
import 'mocha';

describe('bench', () => {
  it('should be a function', () => {
    expect(cli,).to.be.a('function',);
  },);
  it('cli() throw when given 0 total tasks', async() => {
    try {
      await cli([
        '0',
        '0',
      ],);
    } catch (e) {
      expect(e,).to.be.an('Error',);
    }
  },);
},);
