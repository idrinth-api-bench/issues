import WinstonWrapper from '../../src/logger/winston-wrapper.js';
import {
  expect,
} from 'chai';
import 'mocha';
import {
  Logger,
} from 'winston';

describe('logger/winston-wrapper', () => {
  it('should be a class', () => {
    expect(WinstonWrapper,).to.be.a('function',);
  },);
  const logger = new WinstonWrapper(<Logger><unknown> {
    debug: (...rest) => {
      throw new Error('d|' + JSON.stringify(rest,),);
    },
    info: (...rest) => {
      throw new Error('i|' + JSON.stringify(rest,),);
    },
    warn: (...rest) => {
      throw new Error('w|' + JSON.stringify(rest,),);
    },
    error: (...rest) => {
      throw new Error('e|' + JSON.stringify(rest,),);
    },
  },);
  describe('.trace()', () => {
    it('should have a method trace', () => {
      expect(logger.trace,).to.be.a('function',);
    },);
    it('trace should not throw an error if called', () => {
      expect(() => logger.trace('traced',),).to.throw('d|["traced {}"]',);
    },);
    it('trace should handle object messages', () => {
      expect(() => logger.trace('traced', {
        msg: 'hi',
      },),).to.throw(
        'd|["traced {\\"msg\\":\\"hi\\"}"]',
      );
    },);
  },);
  describe('.debug()', () => {
    it('should have a method debug', () => {
      expect(logger.debug,).to.be.a('function',);
    },);
    it('debug should not throw an error if called', () => {
      expect(() => logger.debug('debugged',),).to.throw('d|["debugged {}"]',);
    },);
  },);
  describe('.info()', () => {
    it('should have a method info', () => {
      expect(logger.info,).to.be.a('function',);
    },);
    it('info should not throw an error if called', () => {
      expect(() => logger.info('infoed',),).to.throw('i|["infoed {}"]',);
    },);
  },);
  describe('.warn()', () => {
    it('should have a method warn', () => {
      expect(logger.warn,).to.be.a('function',);
    },);
    it('warn should not throw an error if called', () => {
      expect(() => logger.warn('warned',),).to.throw('w|["warned {}"]',);
    },);
  },);
  describe('.error()', () => {
    it('should have a method error', () => {
      expect(logger.error,).to.be.a('function',);
    },);
    it('error should not throw an error if called', () => {
      expect(() => logger.error('errored',),).to.throw('e|["errored {}"]',);
    },);
  },);
  describe('.fatal()', () => {
    it('should have a method fatal', () => {
      expect(logger.fatal,).to.be.a('function',);
    },);
    it('fatal should not throw an error if called', () => {
      expect(() => logger.fatal('fataled',),).to.throw('e|["fataled {}"]',);
    },);
  },);
},);
