import ResultStore from '../src/result-store.js';
import {
  expect,
} from 'chai';
import 'mocha';
import {
  existsSync,
  unlinkSync
} from 'fs';
import {
  createHash,
} from 'crypto';
import {
  FRAMEWORK_ROOT,
} from '../src/constants';
import {
  tmpdir,
} from 'os';
import {
  sep,
} from 'path';

const hash = createHash('sha256',)
  .update(FRAMEWORK_ROOT,)
  .digest('hex',);
const id = hash + process.pid;
const cacheFolder: string = tmpdir() + sep + 'api-bench-result';

describe('result-store', () => {
  beforeEach(() => {
    if (existsSync(cacheFolder + sep + id,)) {
      unlinkSync(cacheFolder + sep + id,);
    }
  },);
  it('should have a method set', () => {
    expect(ResultStore.set,).to.be.a('function',);
  },);
  it('should have a method get', () => {
    expect(ResultStore.get,).to.be.a('function',);
  },);
  it('get() should return false by default', () => {
    // eslint-disable-next-line no-unused-expressions
    expect(ResultStore.get(false,),).to.be.false;
  },);
  it('get() should return true after set()', () => {
    ResultStore.set(true,);
    // eslint-disable-next-line no-unused-expressions
    expect(ResultStore.get(false,),).to.be.true;
  },);
},);
