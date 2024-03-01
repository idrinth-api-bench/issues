import {
  expect,
} from 'chai';
import 'mocha';
import language, {
  locale,
} from '../../src/helper/language.js';

describe('helper/language', () => {
  after(async() => {
    await locale('en',);
  },);
  it('language() should be a function', () => {
    expect(language,).to.be.a('function',);
  },);
  it('.locale() should be a function', () => {
    expect(locale,).to.be.a('function',);
  },);
  it('no_tasks should return english string', () => {
    expect(language('no_tasks',),).to.be.equal('Can\'t measure zero tasks.',);
  },);
  it('no_tasks should return english string if set to english', async() => {
    await locale('en',);
    expect(language('no_tasks',),).to.be.equal('Can\'t measure zero tasks.',);
  },);
  it('no_tasks should return different string if set to german', async() => {
    await locale('de',);
    expect(language('no_tasks',),).to.not.be.equal('Can\'t measure zero tasks.',);
  },);
  it('no_tasks should return english string if set to unknown', async() => {
    await locale('undefinedlanguage',);
    expect(language('no_tasks',),).to.be.equal('Can\'t measure zero tasks.',);
  },);
},);
