import run from '../src/cli/cli';
import {
  expect,
} from 'chai';
import 'mocha';
import {
  spawn,
} from 'child_process';
import url from 'url';
import Counter from '../src/counter';
import {
  STATUSCODE_FAILURE,
} from '../src/constants';
import prepareTempDir from './prepare-temp-dir';
import delay from './delay';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url,),);

const WAIT_CHECK = 7500;
const WAIT_TEST = 15000;
const WAIT_DELAY = 2500;
const SETUP_TIMEOUT = 10000;

describe('iab-cli', function() {
  before(() => {
    spawn('node', [
      __dirname + '../fixtures/server.cjs',
      '48912',
    ],);
    Counter.clear();
  },);
  after(() => {
    Counter.clear();
  },);
  beforeEach(() => {
    prepareTempDir();
  },);
  afterEach(() => {
    prepareTempDir();
  },);
  it('bench', async() => {
    await delay(WAIT_DELAY,);
    const status = await run([
      '',
      '',
      'bench',
    ], process.cwd() + '/fixtures/test-group-1',);
    await delay(WAIT_CHECK,);
    expect(status,).to.be.eq(STATUSCODE_FAILURE,);
  },).timeout(WAIT_TEST + WAIT_DELAY,);
  it('content', async() => {
    await delay(WAIT_DELAY,);
    const status = await run([
      '',
      '',
      'content',
    ], process.cwd() + '/fixtures/test-group-1',);
    await delay(WAIT_CHECK,);
    expect(status,).to.be.eq(STATUSCODE_FAILURE,);
  },).timeout(WAIT_TEST + WAIT_DELAY,);
},).timeout(SETUP_TIMEOUT,);
