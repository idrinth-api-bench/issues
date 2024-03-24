import mock from 'mock-fs';
import buildRoutes from '../../src/cli/har-route-builder.js';
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
      '/harrb1/src/routes/main': mock.directory({},),
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
  it('should create from example.har', (done,) => {
    buildRoutes(
      [
        'node',
        'create.js',
        __dirname + '../../fixtures/api.har',
      ],
      '/harrb1',
    );
    setTimeout(() => {
      // eslint-disable-next-line no-unused-expressions
      expect(readFileSync(
        '/harrb1/src/routes/main/test.ts',
      ) + '',).to.not.be.empty;
      // eslint-disable-next-line no-unused-expressions
      expect(readFileSync(
        '/harrb1/src/routes/main/get-abc-id.ts',
      ) + '',).to.not.be.empty;
      done();
    }, WAIT_TIME,);
  },);
},);
