// eslint-disable-next-line @typescript-eslint/no-var-requires
const runner = require('../../src/worker/runner',);
import {
  expect,
} from 'chai';
import 'mocha';
import {
  Worker,
} from 'worker_threads';

const TIMEOUT = 6000;
const STATUS = 202;

const server = new Worker('./fixtures/server.js',);
describe('runner', () => {
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
        expect(result.msg,).to.equal('');
        expect(result.success,).to.equal(true,);
        done();
      },);
  },);
},).afterAll(() => {
  server.terminate();
},);
