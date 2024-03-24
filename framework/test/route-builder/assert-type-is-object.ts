import assertTypeIsObject from '../../src/route-builder/assert-type-is-object.js';
import {
  expect,
} from 'chai';
import 'mocha';

describe('open-api/asset-type-is-object', () => {
  it('should be a function', () => {
    expect(assertTypeIsObject,).to.be.a('function',);
  },);
  it('should not throw on object', () => {
    // eslint-disable-next-line no-unused-expressions
    expect(() => assertTypeIsObject({},),).to.not.throw;
  },);
  it('should throw on null', () => {
    expect(() => assertTypeIsObject(null,),)
      .to.throw(
        'Your Open-Api document is not valid, please check for errors!',
      );
  },);
  it('should throw on string', () => {
    expect(() => assertTypeIsObject('',),)
      .to.throw(
        'Your Open-Api document is not valid, please check for errors!',
      );
  },);
  it('should throw on number', () => {
    expect(() => assertTypeIsObject(Math.random(),),)
      .to.throw(
        'Your Open-Api document is not valid, please check for errors!',
      );
  },);
},);
