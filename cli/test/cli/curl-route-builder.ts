import mock from 'mock-fs';
import buildRoutes from '../../src/cli/curl-route-builder.js';
import {
  expect,
} from 'chai';
import 'mocha';
import {
  readFileSync,
} from 'fs';

const WAIT_TIME = 1500;

describe('curl-route-builder', () => {
  before(() => {
    const config = {
      '/curl/src/routes/main': mock.directory({},),
    };
    config[process.cwd()] = mock.load(process.cwd(),);
    mock(config, {
      createCwd: false,
    },);
  },);
  after(() => {
    mock.restore();
  },);
  it('should be a function', () => {
    expect(buildRoutes,).to.be.a('function',);
  },);
  it('should create from curl get request', (done,) => {
    buildRoutes(
      [
        'node',
        'create.js',
        'https://jsonplaceholder.typicode.com/posts',
      ],
      '/curl',
    );
    setTimeout(() => {
      // eslint-disable-next-line no-unused-expressions
      expect(readFileSync(
        '/curl/src/routes/main/' +
        'f503ae6d6407e3ed83e1729c394ec88736499534cb0931b38d4aa3362e2d2c52.ts',
      ) + '',).to.not.be.empty;
      done();
    }, WAIT_TIME,);
  },);
  it('should create from curl post request', (done,) => {
    buildRoutes(
      [
        'node',
        'create.js',
        '-X',
        'POST',
        '-d',
        '"{}"',
        'https://jsonplaceholder.typicode.com/posts',
      ],
      '/curl',
    );
    setTimeout(() => {
      // eslint-disable-next-line no-unused-expressions
      expect(readFileSync(
        '/curl/src/routes/main/' +
        '27cfa601aacb8eb25cfaf24d866c395e6c5674a599f3df055f463f693dbc4f2b.ts',
      ) + '',).to.not.be.empty;
      done();
    }, WAIT_TIME,);
  },);
  it('should create from curl with custom headers', (done,) => {
    buildRoutes(
      [
        'node',
        'create.js',
        '-H',
        'X-MyHeader: 123',
        '-d',
        '{}',
        'https://jsonplaceholder.typicode.com/posts',
      ],
      '/curl',
    );
    setTimeout(() => {
      // eslint-disable-next-line no-unused-expressions
      expect(readFileSync(
        '/curl/src/routes/main/' +
        'c439b0f1e6bc41f299c1756a630bd42b29010c7ce62742675a35dedb7d34113a.ts',
      ) + '',).to.not.be.empty;
      done();
    }, WAIT_TIME,);
  },);
  it('should create from curl with custom cookies', (done,) => {
    buildRoutes(
      [
        'node',
        'create.js',
        '-b',
        'id:1;name:jon',
        'https://jsonplaceholder.typicode.com/posts',
      ],
      '/curl',
    );
    setTimeout(() => {
      // eslint-disable-next-line no-unused-expressions
      expect(readFileSync(
        '/curl/src/routes/main/' +
        'f503ae6d6407e3ed83e1729c394ec88736499534cb0931b38d4aa3362e2d2c52.ts',
      ) + '',).to.not.be.empty;
      done();
    }, WAIT_TIME,);
  },);
  it('should create from curl with timeout flag', (done,) => {
    buildRoutes(
      [
        'node',
        'create.js',
        '--max-time',
        '3',
        'https://jsonplaceholder.typicode.com/posts',
      ],
      '/curl',
    );
    setTimeout(() => {
      // eslint-disable-next-line no-unused-expressions
      expect(readFileSync(
        '/curl/src/routes/main/' +
        '7e53b9febcc37b7344f67bc1589633b55b3c710a7df5b79909f12601ac21cb51.ts',
      ) + '',).to.not.be.empty;
      done();
    }, WAIT_TIME,);
  },);
  it('should throw error with no url', () => {
    expect(() => {
      buildRoutes(
        [
          'node',
          'create.js',
          '-H',
          'X-MyHeader: 123',
          '-d',
          '{}',
        ],
        '/curl',
      );
    },).to.throw('No URL specified.',);
  },);
},);
