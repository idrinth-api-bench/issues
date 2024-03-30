import findName from '../../src/route-builder/find-name.js';
import {
  expect,
} from 'chai';
import 'mocha';

describe('open-api/find-name', () => {
  it('should be a function', () => {
    expect(findName,).to.be.a('function',);
  },);
  it('should fall back to uri and method', () => {
    expect(findName({
      routes: {
        uri: {
          get: {},
        },
      },
    }, 'uri', 'get',),).to.equal('get uri',);
  },);
  it('should fall back description', () => {
    expect(findName({
      routes: {
        uri: {
          get: {
            description: 'something',
          },
        },
      },
    }, 'uri', 'get',),).to.equal('something',);
  },);
  it('should fall back summary', () => {
    expect(findName({
      routes: {
        uri: {
          get: {
            description: 'something',
            summary: 'short',
          },
        },
      },
    }, 'uri', 'get',),).to.equal('short',);
  },);
  it('use operationId', () => {
    expect(findName({
      routes: {
        uri: {
          get: {
            description: 'something',
            summary: 'short',
            operationId: 'a99',
          },
        },
      },
    }, 'uri', 'get',),).to.equal('a99',);
  },);
},);
