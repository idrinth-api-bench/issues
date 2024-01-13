/* eslint no-magic-numbers:0 */
import {
  Result,
} from '../src/result.js';
import {
  expect,
} from 'chai';
import 'mocha';
import {
  NeedleResponse,
} from 'needle';

describe('Result', () => {
  it('should be a function', () => {
    expect(Result,).to.be.a('function',);
  },);
  const result = new Result(
    'id',
    'uri',
    [
      99,
      888,
    ],
    [
      101,
      777,
    ],
    <NeedleResponse><unknown>{
      raw: 'raw body',
      cookies: {
        abc: 'abd',
      },
      statusCode: 209,
      headers: {
        head: 'value',
      },
    },
    [ 'valid', ],
  );
  it('should have a property id with value id', () => {
    expect(result.id,).to.be.a('string',);
    expect(result.id,).to.equal('id',);
  },);
  it('should have a property validators with value [valid]', () => {
    expect(result.validators,).to.be.an('array',);
    expect(result.validators,).to.deep.equal([ 'valid', ],);
  },);
  it('should have a property duration with value ', () => {
    expect(result.duration,).to.be.a('number',);
    expect(result.duration,).to.deep.equal(1999999889,);
  },);
  it('should have a property response', () => {
    expect(result.response,).to.be.an('object',);
  },);
  it('should have a property response.headers with given value', () => {
    expect(result.response.headers,).to.be.an('object',);
    expect(result.response.headers,).to.deep.equal({
      head: 'value',
    },);
  },);
  it('should have a property response.cookies with given value', () => {
    expect(result.response.cookies,).to.be.an('object',);
    expect(result.response.cookies,).to.deep.equal({
      abc: 'abd',
    },);
  },);
  it('should have a property response.body with value `raw body`', () => {
    expect(result.response.body,).to.be.a('string',);
    expect(result.response.body,).to.equal('raw body',);
  },);
  it('should have a property response.uri with value uri', () => {
    expect(result.response.uri,).to.be.a('string',);
    expect(result.response.uri,).to.equal('uri',);
  },);
  it('should have a property response.status with value 209', () => {
    expect(result.response.status,).to.be.a('number',);
    expect(result.response.status,).to.equal(209,);
  },);
},);
