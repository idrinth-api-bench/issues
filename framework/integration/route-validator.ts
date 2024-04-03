import 'mocha';
import {
  expect,
} from 'chai';
import checkRoutes from '../src/cli/check-routes';
import url from 'url';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url,),);

const WAIT_TEST = 15000;

describe('route-validation', function() {
  it('should execute', async() => {
    await checkRoutes([], __dirname + '../fixtures/test-group-1',);
    // eslint-disable-next-line no-unused-expressions
    expect(true,).to.be.true;
  },).timeout(WAIT_TEST,);
},);
