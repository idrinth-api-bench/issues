import mock from 'mock-fs';
import buildRoutes from '../../src/cli/open-api-route-builder.js';
import {
  expect,
} from 'chai';
import 'mocha';
import {
  readFileSync,
} from 'fs';
import url from 'url';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url,),);

const WAIT_TIME = 1500;

describe('open-api-route-builder', () => {
  before(() => {
    const config = {
      '/oarb1/src/routes/main': mock.directory({},),
      '/oarb2/src/routes/main': mock.directory({},),
      '/oarb3/src/routes/main': mock.directory({},),
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
  it('should create from openapi.yml', (done,) => {
    buildRoutes(
      [
        'node',
        'create.js',
        __dirname + '../../fixtures/open-api.yml',
      ],
      '/oarb1',
    );
    setTimeout(() => {
      // eslint-disable-next-line no-unused-expressions
      expect(readFileSync(
        '/oarb1/src/routes/main/test.ts',
      ) + '',).to.not.be.empty;
      // eslint-disable-next-line no-unused-expressions
      expect(readFileSync(
        '/oarb1/src/routes/main/get-abc-id.ts',
      ) + '',).to.not.be.empty;
      done();
    }, WAIT_TIME,);
  },);
  it('should create from openapi.yaml', (done,) => {
    buildRoutes(
      [
        'node',
        'create.js',
        __dirname + '../../fixtures/open-api.yaml',
      ],
      '/oarb2',
    );
    setTimeout(() => {
      // eslint-disable-next-line no-unused-expressions
      expect(readFileSync(
        '/oarb2/src/routes/main/test.ts',
      ) + '',).to.not.be.empty;
      // eslint-disable-next-line no-unused-expressions
      expect(readFileSync(
        '/oarb2/src/routes/main/get-abc-id.ts',
      ) + '',).to.not.be.empty;
      done();
    }, WAIT_TIME,);
  },);
  it('should create from openapi.json', (done,) => {
    buildRoutes(
      [
        'node',
        'create.js',
        __dirname + '../../fixtures/open-api.json',
      ],
      '/oarb3',
    );
    setTimeout(() => {
      // eslint-disable-next-line no-unused-expressions
      expect(readFileSync(
        '/oarb3/src/routes/main/test.ts',
      ) + '',).to.not.be.empty;
      // eslint-disable-next-line no-unused-expressions
      expect(readFileSync(
        '/oarb3/src/routes/main/get-abc-id.ts',
      ) + '',).to.not.be.empty;
      done();
    }, WAIT_TIME,);
  },);
},);
