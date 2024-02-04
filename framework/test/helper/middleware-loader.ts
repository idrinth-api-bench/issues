import loader from '../../src/helper/middleware-loader.js';
import {
  expect,
} from 'chai';
import 'mocha';
import url from 'url';
import {
  realpathSync,
} from 'fs';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url,),);

const basedir = realpathSync(__dirname + '../..',);

describe('helper/middleware-loader', () => {
  it('should be a string', () => {
    expect(loader,).to.be.a('function',);
  },);
  it('should load by absolute path', async() => {
    expect(await loader(__dirname + '../../src/middlewares/cookie',),)
      .to.be.a('function',);
  },);
  it('should load by ^-path', async() => {
    expect(await loader('^cookie',),).to.be.a('function',);
  },);
  it('should load by ^-path and skip the default key', async() => {
    expect(await loader('^encoding',),).to.be.a('function',);
  },);
  it('should load by #-path', async() => {
    expect(await loader('#cookie',),).to.be.a('function',);
  },);
  it('should load by $-path', async() => {
    try {
      await loader('$needle/cookie',);
      // eslint-disable-next-line no-unused-expressions
      expect(false,).to.be.true;
    } catch (e) {
      expect(`${ e }`,).to.equal(`Error: Cannot find module '${ basedir }`
        + '/node_modules/needle/src/middlewares/cookie.js\' '
        + `imported from ${ basedir }/src/helper/include-default.ts`,);
    }
  },);
},);
