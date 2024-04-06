import assertIsObject from '../../src/route-builder/assert-type-is-object.js';
import {
  expect,
} from 'chai';
import 'mocha';

describe('open-api/asset-type-is-object', () => {
  it('should be a function', () => {
    expect(assertIsObject,).to.be.a('function',);
  },);
  it('should not throw on object', () => {
    // eslint-disable-next-line no-unused-expressions
    expect(() => assertIsObject({},),).to.not.throw;
  },);
  it('should throw on null', () => {
    expect(() => assertIsObject(null,),)
      .to.throw(
        'Your OpenApi document is not valid, please check for errors!',
      );
  },);
  it('should throw on string', () => {
    expect(() => assertIsObject('',),)
      .to.throw(
        'Your OpenApi document is not valid, please check for errors!',
      );
  },);
  it('should throw on number', () => {
    expect(() => assertIsObject(Math.random(),),)
      .to.throw(
        'Your OpenApi document is not valid, please check for errors!',
      );
  },);
},);
