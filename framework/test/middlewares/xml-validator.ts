import XMLValidator from '../../src/middlewares/xml-validator.js';
import {
  expect,
} from 'chai';
import 'mocha';
import Result from '../../src/result.js';

describe('middlewares/json-validator', () => {
  it('should be a class', () => {
    expect(XMLValidator,).to.be.a('function',);
  },);
  describe('.prepare()', () => {
    it('should be a function', () => {
      expect(XMLValidator.prepare,).to.be.a('function',);
    },);
    it('should return the unchanged param', () => {
      const param = {
        method: 'get',
        url: 'https://localhost',
      };
      expect(XMLValidator.prepare(param,),).to.be.equal(param,);
    },);
  },);
  describe('.process()', () => {
    it('should be a function', () => {
      expect(XMLValidator.process,).to.be.a('function',);
    },);
    it('should throw if there is no type', () => {
      const response: Result = {
        id: 'example',
        validators: [],
        duration: 234242,
        response: {
          headers: {},
          cookies: {},
          uri: '',
          status: 0,
          body: '{{]]',
        },
      };
      expect(() => XMLValidator.process(response,),)
        .to.throw('The content-type header is missing.',);
    },);
    it('should throw if the type is not json', () => {
      const response: Result = {
        id: 'example',
        validators: [],
        duration: 234242,
        response: {
          headers: {
            'content-type': 'application/jason',
          },
          cookies: {},
          uri: '',
          status: 0,
          body: '{{]]',
        },
      };
      expect(() => XMLValidator.process(response,),)
        .to.throw(
          'The content-type application/jason is not */xml.',
        );
    },);
    it('should throw if the body is not json', () => {
      const response: Result = {
        id: 'example',
        validators: [],
        duration: 234242,
        response: {
          headers: {
            'content-type': 'text/xml',
          },
          cookies: {},
          uri: '',
          status: 0,
          body: '<<>>',
        },
      };
      expect(() => XMLValidator.process(response,),)
        .to.throw(
          'The XML body is invalid.',
        );
    },);
    it('should not throw if the body is xml', () => {
      const response: Result = {
        id: 'example',
        validators: [],
        duration: 234242,
        response: {
          headers: {
            'content-type': 'text/xml',
          },
          cookies: {},
          uri: '',
          status: 0,
          body: '<s/>',
        },
      };
      expect(() => XMLValidator.process(response,),).to.not.throw();
    },);
  },);
},);
