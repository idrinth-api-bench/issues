import {
  NullLogger,
} from '../../src/logger/null-logger';
import {
  expect,
} from 'chai';
import 'mocha';

describe('logger/null-logger', () => {
  it('should be a class', () => {
    expect(NullLogger,).to.be.a('function',);
  },);
  const logger = new NullLogger();
  it('should have a static method trace', () => {
    expect(logger.trace,).to.be.a('function',);
  },);
  it('should have a static method debug', () => {
    expect(logger.debug,).to.be.a('function',);
  },);
  it('should have a static method info', () => {
    expect(logger.info,).to.be.a('function',);
  },);
  it('should have a static method warn', () => {
    expect(logger.warn,).to.be.a('function',);
  },);
  it('should have a static method error', () => {
    expect(logger.error,).to.be.a('function',);
  },);
  it('should have a static method fatal', () => {
    expect(logger.fatal,).to.be.a('function',);
  },);
},);
