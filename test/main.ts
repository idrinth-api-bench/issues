import main from '../src/main';
import {
  expect,
} from 'chai';
import 'mocha';
import Reporter from '../src/reporter/reporter';
import { NullLogger } from '../src/logger/null-logger';

const NOOPR: Reporter = () => {/* noop */};

describe('main', () => {
  it('should be a function', () => {
    expect(main,).to.be.a('function',);
  },);
  it('can be called with 3 params', () => {
    expect(() => main(1, 1, []),).to.not.throw;
  },);
  it('can be called with 4 params', () => {
    expect(() => main(1, 1, [], NOOPR),).to.not.throw;
  },);
  it('can be called with 5 params', () => {
    expect(() => main(1, 1, [], NOOPR, new NullLogger()),).to.not.throw;
  },);
},);
