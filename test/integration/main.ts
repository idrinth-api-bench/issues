import mock from 'mock-fs';
import {
  run,
} from '../../src/main.js';
import {
  expect,
} from 'chai';
import 'mocha';
import {
  readFileSync,
} from 'fs';
import {
  spawn
} from 'child_process';
import url from 'url';
import NoProgress from '../../src/progress/no-progress.js';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url,),);

const ONE = 1;
const WAIT_CHECK = 7500;
const WAIT_TEST = 15000;
const WAIT_DELAY  = 2500;
const delay = (time,) => new Promise((resolve,) => setTimeout(resolve, time,),);

describe('main@job', () => {
  before(() => {
    spawn('node', [ __dirname + '../../fixtures/server.cjs', '48912', ],);
    const config = {
      '/mocked-main': mock.directory({},),
    };
    config[process.cwd()] = mock.load(process.cwd(),);
    mock(config, {
      createCwd: false,
    },);
  },);
  after(() => {
    mock.restore();
  },);
  it ('should write results', async function() {
    this.timeout(WAIT_TEST + WAIT_DELAY,);
    await delay(WAIT_DELAY,);
    await run({
      resultOutputDir: '/mocked-main',
      progress: new NoProgress()
    }, ONE, ONE, [
      {
        id: 'example',
        main: {
          method: 'get',
          url: 'http://localhost:48912',
        },
        post: [
          '^status-2xx',
        ],
      },
    ],);
    await delay(WAIT_CHECK,);
    expect(readFileSync('/mocked-main/result.csv') + '').to.not.be.empty;
    expect(readFileSync('/mocked-main/result.json') + '').to.not.be.empty;
    return;
  },);
},);
