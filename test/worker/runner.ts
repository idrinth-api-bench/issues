import runner from '../../src/worker/runner.js';
import {
  expect,
} from 'chai';
import 'mocha';
import {
  spawn,
} from 'child_process';
import url from 'url';

const TIMEOUT = 15000;
const WAIT_DELAY = 2500;
const __dirname = url.fileURLToPath(new URL('.', import.meta.url,),);

const delay = (time,) => new Promise((resolve,) => setTimeout(resolve, time,),);

describe('worker/runner', () => {
  it('should be a function', () => {
    expect(runner,).to.be.a('function',);
  },);
  it('should request a page from the offline server', async() => {
    await runner(
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
      },);
  },).timeout(TIMEOUT,);
  it('should request a page from the server', async() => {
    await delay(WAIT_DELAY,);
    await runner(
      {
        id: 'i',
        main: {
          method: 'get',
          url: 'http://localhost:48901',
        },
      },
      (result,) => {
        expect(result,).to.be.an('object',);
        expect(result.duration,).to.be.a('number',);
        expect(result.id,).to.equal('i',);
        expect(result.msg,).to.equal('',);
        expect(result.success,).to.equal(true,);
      },);
    await delay(WAIT_DELAY,);
  },).timeout(TIMEOUT,);
},)
  .beforeAll(() => {
    spawn('node', [ __dirname + '../../fixtures/server.cjs', '48901', ],);
  },);
