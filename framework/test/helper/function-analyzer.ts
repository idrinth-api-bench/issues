import {
  analyze,
} from '../../src/helper/function-analyzer.js';
import {
  expect,
} from 'chai';
import 'mocha';

const RANDOM_NUMBER = 11;

describe('helper/function-analyzer', () => {
  it('should be a function', () => {
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
  it(
    'should return an empty array when handling no params with wrapped body',
    () => {
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      const ret = analyze(() => ({}),);
      expect(ret,).to.be.an('array',);
      expect(ret,).to.deep.equal([],);
    },
  );
  it(
    'should return an empty array when handling '
    + 'no params with direct return body',
    () => {
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      const ret = analyze(() => 'test',);
      expect(ret,).to.be.an('array',);
      expect(ret,).to.deep.equal([],);
    },
  );
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
    it("should return an array of params when handling one untyped param", () => {
      process.env.MY_STRING_OTHER = 'abc';
      // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars
      const ret = analyze((myStringOther) => { });
      expect(ret).to.be.an("array");
      expect(ret).to.deep.equal([
        {
          value: "abc",
          default: "",
          envName: "MY_STRING_OTHER",
          name: "myStringOther",
          type: "string",
        },
      ]);
    });
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
  it('should return an array of params when handling one number param', () => {
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
  it('should return an array of params when handling one string param', () => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars
    const ret = analyze((myString = 'An Example',) => {},);
    expect(ret,).to.be.an('array',);
    expect(ret,).to.deep.equal([ {
      value: 'An Example',
      default: 'An Example',
      envName: 'MY_STRING',
      name: 'myString',
      type: 'string',
    }, ],);
  },);
  it('should throw when handling one const param', () => {
    const defaultValue = 'something';
    // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars
    expect(() => analyze((myString = defaultValue,) => {},),)
      .to.throw('Can\'t handle variable default value on myString.',);
  },);
  it('should throw when handling one broken param', () => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars
    expect(() => analyze((/*String*/ myBool = false,) => {},),)
      .to.throw('Can\'t handle variable default value on myBool.',);
  },);
},);
