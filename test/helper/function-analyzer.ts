import {
  analyze,
} from '../../src/helper/function-analyzer.js';
import {
  expect,
} from 'chai';
import 'mocha';

const RANDOM_NUMBER = 11;

describe('helper/function-analyzer', () => {
  it('should be a functiom', () => {
    expect(analyze,).to.be.a('function',);
  },);
  it('should return an empty array when handling no params', () => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const ret = analyze(function() {},);
    expect(ret,).to.be.an('array',);
    expect(ret,).to.deep.equal([],);
  },);
  it('should return an empty array when handling no params', () => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const ret = analyze(() => {},);
    expect(ret,).to.be.an('array',);
    expect(ret,).to.deep.equal([],);
  },);
  it('should return an array of params when handling one typed param', () => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars
    const ret = analyze(function(/*Boolean*/myBoolean,) {},);
    expect(ret,).to.be.an('array',);
    expect(ret,).to.deep.equal([ {
      value: false,
      default: 'false',
      envName: 'MY_BOOLEAN',
      name: 'myBoolean',
      type: 'boolean',
    }, ],);
  },);
  it('should return an array of params when handling one untyped param', () => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars
    const ret = analyze((myString,) => {},);
    expect(ret,).to.be.an('array',);
    expect(ret,).to.deep.equal([ {
      value: '',
      default: '',
      envName: 'MY_STRING',
      name: 'myString',
      type: 'string',
    }, ],);
  },);
  it('should return an array of params when handling two params', () => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars, no-magic-numbers
    const ret = analyze((myNumber = 11, /*Boolean*/myString = '',) => {},);
    expect(ret,).to.be.an('array',);
    expect(ret,).to.deep.equal(
      [
        {
          value: RANDOM_NUMBER,
          default: '11',
          envName: 'MY_NUMBER',
          name: 'myNumber',
          type: 'number',
        },
        {
          value: false,
          default: '\'\'',
          envName: 'MY_STRING',
          name: 'myString',
          type: 'boolean',
        },
      ],
    );
  },);
  it('should return an array of params when handling one number params', () => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars, no-magic-numbers
    const ret = analyze((myNumber = 11,) => {},);
    expect(ret,).to.be.an('array',);
    expect(ret,).to.deep.equal([ {
      value: RANDOM_NUMBER,
      default: '11',
      envName: 'MY_NUMBER',
      name: 'myNumber',
      type: 'number',
    }, ],);
  },);
},);
