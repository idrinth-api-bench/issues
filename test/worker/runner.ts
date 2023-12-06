import runner from '../../src/worker/runner.js';
import {
  expect,
} from 'chai';
import 'mocha';
import {
  Worker,
} from 'worker_threads';
import url from 'url';

const TIMEOUT = 6000;
const WAIT_DELAY = 100;
const __dirname = url.fileURLToPath(new URL('.', import.meta.url,),);

const delay = (time,) => new Promise((resolve,) => setTimeout(resolve, time,),);

let server;

describe('runner', async() => {
  let ready = false;
  before(() => {
    server = new Worker(__dirname + '../../fixtures/server.cjs',);
    server.onmessage = (msg,) => {
      ready = msg === 'started';
    };
  },);
  while (! ready) {
    // eslint-disable-next-line no-await-in-loop
    await delay(WAIT_DELAY,);
  }
  after(() => {
    server.terminate();
  },);
  it('should be a function', () => {
    expect(runner,).to.be.a('function',);
  },);
  it('should request a page from the offline server', (done,) => {
    runner(
      {
        id: 'i',
        main: {
          method: 'get',
          url: 'http://localhost:8902',
          cookies: {},
          headers: {},
          body: '',
        },
      },
      (result,) => {
        expect(result,).to.be.an('object',);
        expect(result.duration,).to.equal(null,);
        expect(result.id,).to.equal('i',);
        expect(result.msg,).to.be.a('string',);
        expect(result.success,).to.equal(false,);
        done();
      },);
  },).timeout(TIMEOUT,);
  it('should request a page from the server', (done,) => {
    runner(
      {
        id: 'i',
        main: {
          method: 'get',
          url: 'http://localhost:8901',
          cookies: {},
          headers: {},
          body: '',
        },
        pre: [ '#cookie', ],
      },
      (result,) => {
        expect(result,).to.be.an('object',);
        expect(result.duration,).to.be.a('number',);
        expect(result.id,).to.equal('i',);
        expect(result.msg,).to.equal('',);
        expect(result.success,).to.equal(true,);
        done();
      },);
  },).timeout(TIMEOUT,);
},);
