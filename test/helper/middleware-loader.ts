import * as loader from '../../src/helper/middleware-loader';
import {
  expect,
} from 'chai';
import 'mocha';

describe('helper/middleware-loader', () => {
  it('should be a string', () => {
    expect(loader,).to.be.a('function',);
  },);
  it('should load by absolute path', () => {
    expect(loader(__dirname + '/../../src/middlewares/cookie',),).to.be.a(
      'object',
    );
  },);
  it('should load by ^-path', () => {
    expect(loader('^cookie',),).to.be.a('object',);
  },);
  it('should load by ^-path and skip the default key', () => {
    expect(loader('^../main',),).to.be.a('function',);
  },);
  it('should load by #-path', () => {
    expect(loader('#cookie',),).to.be.a('object',);
  },);
  it('should load by $-path', () => {
    expect(() => loader('$@idrinth/api-bench/cookie',),).to.throw(
      'Cannot find module \'@idrinth/api-bench/src/middlewares/cookie\'',
    );
  },);
},);
