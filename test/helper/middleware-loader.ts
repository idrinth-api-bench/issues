import loader from '../../src/helper/middleware-loader.js';
import {
  expect,
} from 'chai';
import 'mocha';
import * as url from 'url';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url,),);

describe('helper/middleware-loader', () => {
  it('should be a string', () => {
    expect(loader,).to.be.a('function',);
  },);
  it('should load by absolute path', () => {
    expect(loader(__dirname + '/../../src/middlewares/cookie',),)
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
    expect(loader('$@idrinth/api-bench/cookie',),).to.be.rejectedWith(
      'Cannot find module \'@idrinth/api-bench/src/middlewares/cookie\'',
    );
  },);
},);
