import {
  run,
} from '../src/main.js';
import {
  use as chaiUse,
  expect,
} from 'chai';
import chaiAsPromised from 'chai-as-promised';
import 'mocha';

chaiUse(chaiAsPromised,);

const ONE = 1;

describe('main', () => {
  it('should be a function', () => {
    expect(run,).to.be.a('function',);
  },);
  it('can be called with 4 params', () => {
    expect(run({}, ONE, ONE, [],),)
      .to.be.rejectedWith('Can\'t measure no tasks.',);
  },);
},);
