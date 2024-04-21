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
        'de6bce8728a2de1111cc48f61a8eaa56f7c459542938b68df96bc8d9136ce611.ts',
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
        'b7e70e6fd9434a454f37c23867338fa41a885007d7f539d84fcb184fd6920da7.ts',
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
        '8fd0745204bec361171d098c8794852ed9221ad32c906f8f7eece532d83070f5.ts',
      ) + '',).to.not.be.empty;
      done();
    }, WAIT_TIME,);
  },);
},);
