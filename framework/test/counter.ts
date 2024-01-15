import Counter from '../src/counter.js';
import {
  expect,
} from 'chai';
import 'mocha';

describe('counter', () => {
  const key1 = 'some-example';
  const key2 = 'some-other';
  before(() => {
    Counter.clear();
  },);
  after(() => {
    Counter.clear();
  },);
  it('should be a class', () => {
    expect(Counter,).to.be.a('function',);
  },);
  it('.increment() should be a function', () => {
    expect(Counter.increment,).to.be.a('function',);
  },);
  it('.decrement() should be a function', () => {
    expect(Counter.decrement,).to.be.a('function',);
  },);
  it('.clear() should be a function', () => {
    expect(Counter.clear,).to.be.a('function',);
  },);
  it('.isEmpty() should be a function', () => {
    expect(Counter.isEmpty,).to.be.a('function',);
  },);
  it('incrementing should make a key none-empty', () => {
    Counter.increment(key1,);
    // eslint-disable-next-line no-unused-expressions
    expect(Counter.isEmpty(key1,),).to.be.false;
  },);
  it('incrementing twice should keep a key none-empty', () => {
    Counter.increment(key1,);
    // eslint-disable-next-line no-unused-expressions
    expect(Counter.isEmpty(key1,),).to.be.false;
  },);
  it('decrementing should make a key none-empty', () => {
    Counter.decrement(key2,);
    // eslint-disable-next-line no-unused-expressions
    expect(Counter.isEmpty(key2,),).to.be.false;
  },);
  it('clear should make all keys empty', () => {
    Counter.clear();
    // eslint-disable-next-line no-unused-expressions
    expect(Counter.isEmpty(key1,),).to.be.true;
    // eslint-disable-next-line no-unused-expressions
    expect(Counter.isEmpty(key2,),).to.be.true;
  },);
},);
