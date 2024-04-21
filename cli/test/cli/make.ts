import make from '../../src/cli/make.js';
import {
  expect,
} from 'chai';
import 'mocha';
import {
  existsSync,
  readFileSync,
  rmdirSync,
} from 'fs';
import {
  tmpdir,
} from 'os';
import {
  emptyDir,
} from 'fs-extra';

const delay = (ms: number,) => new Promise(
  (resolve,) => setTimeout(resolve, ms,),
);
const THIRTY_SECONDS = 300000;
const FILE_SYSTEM_DELAY = 10000;

describe('make', () => {
  const tmp = tmpdir();
  before(async() => {
    if (! existsSync(tmp+'/benchmark',)) {
      return;
    }
    await emptyDir(tmp + '/benchmark',);
    rmdirSync(tmp + '/benchmark',);
  },);
  it('should be a function', () => {
    expect(make,).to.be.a('function',);
  },);
  describe('make()', () => {
    it('should not throw', async() => {
      expect(() => make([], tmp,),).to.not.throw();
      await delay(FILE_SYSTEM_DELAY,);
    },).timeout(THIRTY_SECONDS,);
    it('should create a package.json', () => {
      // eslint-disable-next-line no-unused-expressions
      expect(readFileSync(tmp + '/benchmark/package.json',)+'',)
        .to.not.be.empty;
    },);
    it('should create a tsconfig.json', () => {
      // eslint-disable-next-line no-unused-expressions
      expect(readFileSync(tmp + '/benchmark/tsconfig.json',)+'',)
        .to.not.be.empty;
    },);
    it('should create a .gitignore', () => {
      // eslint-disable-next-line no-unused-expressions
      expect(readFileSync(tmp + '/benchmark/.gitignore',)+'',)
        .to.not.be.empty;
    },);
    it('should create a .editorconfig', () => {
      // eslint-disable-next-line no-unused-expressions
      expect(readFileSync(tmp + '/benchmark/.editorconfig',)+'',)
        .to.not.be.empty;
    },);
    it('should create a .eslintrc.yml', () => {
      // eslint-disable-next-line no-unused-expressions
      expect(readFileSync(tmp + '/benchmark/.eslintrc.yml',)+'',)
        .to.not.be.empty;
    },);
    it('should create a .nycrc.json', () => {
      // eslint-disable-next-line no-unused-expressions
      expect(readFileSync(tmp + '/benchmark/.nycrc.json',)+'',)
        .to.not.be.empty;
    },);
    it('should create a .mocharc.cjs', () => {
      // eslint-disable-next-line no-unused-expressions
      expect(readFileSync(tmp + '/benchmark/.mocharc.cjs',)+'',)
        .to.not.be.empty;
    },);
    it('should create a package-lock.json', () => {
      // eslint-disable-next-line no-unused-expressions
      expect(readFileSync(tmp + '/benchmark/package-lock.json',)+'',)
        .to.not.be.empty;
    },);
  },);
},);
