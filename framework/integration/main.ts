import run from '../src/main';
import {
  expect,
} from 'chai';
import 'mocha';
import {
  readFileSync,
} from 'fs';
import {
  spawn,
} from 'child_process';
import url from 'url';
import NoProgress from '../src/progress/no-progress';
import Counter from '../src/counter';
import simpleMultiReporter from './simple-multi-reporter';
import {
  TEMP_DIR,
} from '../src/constants';
import prepareTempDir from './prepare-temp-dir';
import delay from './delay';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url,),);

const ONE = 1;
const WAIT_CHECK = 7500;
const WAIT_TEST = 15000;
const WAIT_DELAY = 2500;
const SETUP_TIMEOUT = 10000;

describe('main@job', function() {
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
  beforeEach(prepareTempDir,);
  afterEach(prepareTempDir,);
  it('should write results', async() => {
    await delay(WAIT_DELAY,);
    await run({
      resultOutputDir: `${ TEMP_DIR }`,
      progress: new NoProgress(),
      resultHandler: simpleMultiReporter,
    }, ONE, ONE, [ {
      id: 'example',
      main: {
        method: 'get',
        url: 'http://localhost:48912',
      },
      post: [ '^status-2xx', ],
    }, ],);
    await delay(WAIT_CHECK,);
    // eslint-disable-next-line no-unused-expressions
    expect(
      readFileSync(`${ TEMP_DIR }/result.csv`, 'utf8',),
    ).to.not.be.empty;
    // eslint-disable-next-line no-unused-expressions
    expect(
      readFileSync(`${ TEMP_DIR }/result.json`, 'utf8',),
    ).to.not.be.empty;
    // eslint-disable-next-line no-unused-expressions
    expect(
      readFileSync(`${ TEMP_DIR }/result.html`, 'utf8',),
    ).to.not.be.empty;
  },).timeout(WAIT_TEST + WAIT_DELAY,);
},).timeout(SETUP_TIMEOUT,);
