// eslint-disable-next-line @typescript-eslint/no-var-requires
const validator = require('../../src/worker/validator',);
import {
  expect,
} from 'chai';
import 'mocha';

describe('validator', () => {
  it('should be a function', () => {
    expect(validator,).to.be.a('function',);
  },);
  it('should not test failures', () => {
    expect(validator({
      id: '+',
      duration: null,
      msg: 'Döner macht schöner',
      success: false,
      validators: [],
    },),).to.deep.equal({
      success: false,
      msg: 'Döner macht schöner',
      id: '+',
      duration: null,
    },);
  },);
  it('should fail if validator is missing', () => {
    const duration = 12;
    const result = validator({
      id: '+',
      duration,
      validators: [ __dirname + '/a.js', ],
    },);
    expect(result.id,).to.equal('+',);
    expect(result.duration,).to.equal(duration,);
    //eslint-disable-next-line no-unused-expressions
    expect(result.success,).to.be.false;
    expect(result.msg + '',).to.match(/^Error: Cannot find module .*?a.js/u,);
  },);
  it('should succeed if validators throw no error', () => {
    const duration = 92;
    const result = validator({
      id: '#',
      duration,
      validators: [],
    },);
    expect(result.id,).to.equal('#',);
    expect(result.duration,).to.equal(duration,);
    //eslint-disable-next-line no-unused-expressions
    expect(result.success,).to.be.true;
  },);
  it('should succeed if validator succeeds', () => {
    const duration = 92;
    const result = validator({
      id: '#',
      duration,
      response: {
        status: 209
      },
      validators: ['#status-2xx'],
    },);
    expect(result.id,).to.equal('#',);
    expect(result.duration,).to.equal(duration,);
    //eslint-disable-next-line no-unused-expressions
    expect(result.success,).to.be.true;
  },);
},);
