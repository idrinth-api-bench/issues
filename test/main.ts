import main from '../src/main';
import {
  expect,
} from 'chai';
import 'mocha';
import Reporter from '../src/reporter/reporter';
import {
  NullLogger,
} from '../src/logger/null-logger';

const NOOPR: Reporter = () => { /* noop */ };
const ONE = 1;

describe('main', () => {
  it('should be a function', () => {
    expect(main,).to.be.a('function',);
  },);
  it('can be called with 3 params', () => {
    expect(() => main(ONE, ONE, [],),).to.throw('Can\'t measure no tasks.',);
  },);
  it('can be called with 4 params', () => {
    expect(() => main(ONE, ONE, [], NOOPR,),)
      .to.throw('Can\'t measure no tasks.',);
  },);
  it('can be called with 5 params', () => {
    expect(() => main(ONE, ONE, [], NOOPR, new NullLogger(),),)
      .to.throw('Can\'t measure no tasks.',);
  },);
},);
