import {analyze, Param} from '../../src/helper/function-analyzer';
import {
  expect,
} from 'chai';
import 'mocha';

describe('helper/function-analyzer', () => {
  it('should be a functiom', () => {
    expect(analyze,).to.be.a('function',);
  },);
  it('should return an empty array when handling no params', () => {
    const ret = analyze(function () {});
    expect(ret,).to.be.an('array',);
    expect(ret,).to.deep.equal([]);
  },);
  it('should return an empty array when handling no params', () => {
    const ret = analyze(() => {});
    expect(ret,).to.be.an('array',);
    expect(ret,).to.deep.equal([]);
  },);
  it('should return an array of params when handling one typed params', () => {
    const ret = analyze(function (/*Boolean*/myBoolean) {});
    expect(ret,).to.be.an('array',);
    expect(ret,).to.deep.equal([{
        value: false,
        default: 'false',
        envName: 'MY_BOOLEAN',
        name: 'myBoolean',
        type: 'boolean',
    }]);
  },);
  it('should return an array of params when handling one untyped params', () => {
    const ret = analyze((myString) => {});
    expect(ret,).to.be.an('array',);
    expect(ret,).to.deep.equal([{
        value: '',
        default: '',
        envName: 'MY_STRING',
        name: 'myString',
        type: 'string',
    }]);
  },);
  it('should return an array of params when handling two params', () => {
    const ret = analyze((myNumber = 11,/*Boolean*/myString = '') => {});
    expect(ret,).to.be.an('array',);
    expect(ret,).to.deep.equal([{
        value: 11,
        default: '11',
        envName: 'MY_NUMBER',
        name: 'myNumber',
        type: 'number',
    },{
        value: false,
        default: '\'\'',
        envName: 'MY_STRING',
        name: 'myString',
        type: 'boolean',
    }]);
  },);
  it('should return an array of params when handling one number params', () => {
    const ret = analyze((myNumber = 11) => {});
    expect(ret,).to.be.an('array',);
    expect(ret,).to.deep.equal([{
        value: 11,
        default: '11',
        envName: 'MY_NUMBER',
        name: 'myNumber',
        type: 'number',
    }]);
  },);
},);
