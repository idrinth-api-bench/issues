import mock from 'mock-fs';
import buildRoutes from '../src/open-api-route-builder.js';
import {
  expect,
} from 'chai';
import 'mocha';
import {
  FRAMEWORK_ROOT,
} from '../src/constants.js';
import {
  readFileSync,
} from 'fs';

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
  it('should create from openapi.yml', () => {
    buildRoutes(
      [
        'node',
        'create.js',
        FRAMEWORK_ROOT + '/fixtures/open-api.yml',
      ],
      '/oarb1',
    );
    // eslint-disable-next-line no-unused-expressions
    expect(readFileSync(
      '/oarb1/src/routes/main/test.ts',
    )+'',).to.not.be.empty;
    // eslint-disable-next-line no-unused-expressions
    expect(readFileSync(
      '/oarb1/src/routes/main/get-abc-id.ts',
    )+'',).to.not.be.empty;
  },);
  it('should create from openapi.yaml', () => {
    buildRoutes(
      [
        'node',
        'create.js',
        FRAMEWORK_ROOT + '/fixtures/open-api.yaml',
      ],
      '/oarb2',
    );
    // eslint-disable-next-line no-unused-expressions
    expect(readFileSync(
      '/oarb2/src/routes/main/test.ts',
    )+'',).to.not.be.empty;
    // eslint-disable-next-line no-unused-expressions
    expect(readFileSync(
      '/oarb2/src/routes/main/get-abc-id.ts',
    )+'',).to.not.be.empty;
  },);
  it('should create from openapi.json', () => {
    buildRoutes(
      [
        'node',
        'create.js',
        FRAMEWORK_ROOT + '/fixtures/open-api.json',
      ],
      '/oarb3',
    );
    // eslint-disable-next-line no-unused-expressions
    expect(readFileSync(
      '/oarb3/src/routes/main/test.ts',
    )+'',).to.not.be.empty;
    // eslint-disable-next-line no-unused-expressions
    expect(readFileSync(
      '/oarb3/src/routes/main/get-abc-id.ts',
    )+'',).to.not.be.empty;
  },);
},);
