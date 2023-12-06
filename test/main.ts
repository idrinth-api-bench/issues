import {
  run,
} from '../src/main.js';
import {
  use as chaiUse,
  expect,
} from 'chai';
import chaiAsPromised from 'chai-as-promised';
import 'mocha';
import Reporter from '../src/reporter/reporter.js';
import {
  NullLogger,
} from '../src/logger/null-logger.js';

chaiUse(chaiAsPromised,);

const NOOPR: Reporter = () => { /* noop */ };
const ONE = 1;

describe('main', () => {
  it('should be a function', () => {
    expect(run,).to.be.a('function',);
  },);
  it('can be called with 3 params', () => {
    expect(run({}, ONE, ONE, [],),)
      .to.be.rejectedWith('Can\'t measure no tasks.',);
  },);
  it('can be called with 4 params', () => {
    expect(run({
      resultHandler: NOOPR,
    }, ONE, ONE, [],),)
      .to.be.rejectedWith('Can\'t measure no tasks.',);
  },);
  it('can be called with 5 params', () => {
    expect(run({
      logger: new NullLogger(),
      resultHandler: NOOPR,
    }, ONE, ONE, [],),)
      .to.be.rejectedWith('Can\'t measure no tasks.',);
  },);
},);
