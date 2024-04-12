import {
  expect,
} from 'chai';
import 'mocha';
import language, {
  locale,
} from '../../src/helper/language.js';
import fc from 'fast-check';
import {
  existsSync,
} from 'fs';
import languageKey from '../../src/locales/language-key';

describe('helper/language', () => {
  after(async() => {
    await locale('en',);
  },);
  fc.assert(fc.property(fc.string(), (lang,) => {
    it(`no_tasks should return english string if set to ${ lang }`, async() => {
      if (
        lang.match(/^[a-z]{2}$/u,)
        && existsSync(process.cwd() + 'language/' + lang + '.yml',)
      ) {
        //skip
        return true;
      }
      await locale(lang,);
      expect(language('no_tasks',),).to.be.equal('Can\'t measure zero tasks.',);
      return true;
    },);
  },),);
  fc.assert(fc.property(fc.string(), (key,) => {
    it(`${ key } should return a string`, () => {
      expect(language(key as languageKey,),).to.be.a('string',);
    },);
  },),);
},);
