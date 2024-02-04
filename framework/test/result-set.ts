/* eslint no-magic-numbers:0 */
import {
  ResultSet,
} from '../src/result-set.js';
import {
  expect,
} from 'chai';
import 'mocha';

describe('ResultSet', () => {
  it('should be a function', () => {
    expect(ResultSet,).to.be.a('function',);
  },);
  const result = new ResultSet('an id',);
  it('should have a property id with value `an id`', () => {
    expect(result.id,).to.be.a('string',);
    expect(result.id,).to.equal('an id',);
  },);
  it('should have a property errors with value 0', () => {
    expect(result.errors,).to.be.a('number',);
    expect(result.errors,).to.equal(0,);
  },);
  it('should have a property count with value 0', () => {
    expect(result.count,).to.be.a('number',);
    expect(result.count,).to.equal(0,);
  },);
  it('should have a durations errors with value []', () => {
    expect(result.durations,).to.be.an('array',);
    expect(result.durations,).to.deep.equal([],);
  },);
  it('should have a property msgs with value {}', () => {
    expect(result.msgs,).to.be.an('object',);
    expect(result.msgs,).to.deep.equal({},);
  },);
  it('should have a method add', () => {
    expect(result.add,).to.be.a('function',);
  },);
  it('using add should increase values appropriatly(case error)', () => {
    result.add({
      id: 'any',
      duration: 666,
      success: false,
      msg: 'Not enough programmers.',
    },);

    expect(result.errors,).to.equal(1,);
    expect(result.count,).to.equal(1,);
    expect(result.msgs,).to.deep.equal({
      'Not enough programmers.': 1,
    },);
    expect(result.durations,).to.deep.equal([ 666, ],);
  },);
  it('using add should increase values appropriatly', () => {
    result.add({
      id: 'any',
      duration: null,
      success: true,
    },);

    expect(result.errors,).to.equal(1,);
    expect(result.count,).to.equal(2,);
    expect(result.msgs,).to.deep.equal({
      'Not enough programmers.': 1,
    },);
    expect(result.durations,).to.deep.equal([ 666, ],);
  },);
},);
