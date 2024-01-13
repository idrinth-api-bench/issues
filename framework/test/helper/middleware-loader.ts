import loader from '../../src/helper/middleware-loader.js';
import {
  expect,
  use as chaiUse,
} from 'chai';
import 'mocha';
import chaiAsPromised from 'chai-as-promised';
import url from 'url';
import {
  realpathSync,
} from 'fs';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url,),);

const basedir = realpathSync(__dirname + '../..',);
chaiUse(chaiAsPromised,);

describe('helper/middleware-loader', () => {
  it('should be a string', () => {
    expect(loader,).to.be.a('function',);
  },);
  it('should load by absolute path', () => {
    expect(loader(__dirname + '../../src/middlewares/cookie',),)
      .to.eventually.be.a('function',);
  },);
  it('should load by ^-path', () => {
    expect(loader('^cookie',),).to.eventually.be.a('function',);
  },);
  it('should load by ^-path and skip the default key', () => {
    expect(loader('^../main',),).to.eventually.be.a('function',);
  },);
  it('should load by #-path', () => {
    expect(loader('#cookie',),).to.eventually.be.a('function',);
  },);
  it('should load by $-path', () => {
    expect(loader('$needle/cookie',),).to.be.rejectedWith(
      `Cannot find module '${ basedir }`
      + '/node_modules/needle/src/middlewares/cookie\' '
      + `imported from ${ basedir }/src/helper/include-default.ts`,
    );
  },);
},);
