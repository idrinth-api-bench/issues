import main from '../src/main';
import {
  expect,
} from 'chai';
import 'mocha';
import {
  existsSync, unlinkSync,
} from 'fs';
import {
  Worker,
} from 'worker_threads';

const SHORT = 3500;
const LONG = 7500;

describe('main', () => {
  const file1 = process.cwd() + '/result.csv';
  const file2 = process.cwd() + '/result.json';
  const w = new Worker('./fixtures/server.js',);
  it('should be a function', () => {
    expect(main,).to.be.a('function',);
  },);
  it('should create a csv and a json file', (done,) => {
    const runner = new Worker('./fixtures/runner.js',);
    setTimeout(() => {
      // eslint-disable-next-line no-unused-expressions
      expect(existsSync(file1,),).to.be.true;
      // eslint-disable-next-line no-unused-expressions
      expect(existsSync(file2,),).to.be.true;
      w.terminate();
      runner.terminate();
      unlinkSync(file1,);
      unlinkSync(file2,);
      setTimeout(done, SHORT,);
    }, SHORT,);
  },).timeout(SHORT,);
},);
