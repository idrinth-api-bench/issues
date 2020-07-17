import Encoding from '../../src/middlewares/encoding';
import {
  expect,
} from 'chai';
import 'mocha';
import {
  Request,
} from '../../src/request';

describe('middlewares/encoding', () => {
  it('should be a class', () => {
    expect(Encoding,).to.be.a('function',);
  },);
  it('should have a static method prepare', () => {
    expect(Encoding.prepare,).to.be.a('function',);
  },);
  it('should have a static method process', () => {
    expect(Encoding.process,).to.be.a('function',);
  },);
  it('prepare should json-transform object to string', () => {
    expect(Encoding.prepare(<Request><unknown>{
      body: {
        a: 'b',
      },
      autohandle: 'json',
    },).body,).to.equal('{"a":"b"}',);
  },);
  it('prepare should json-transform array to string', () => {
    expect(Encoding.prepare(<Request><unknown>{
      body: [ 'a', ],
      autohandle: 'json',
    },).body,).to.equal('["a"]',);
  },);
  it('prepare should form-transform object to string', () => {
    expect(Encoding.prepare(<Request><unknown>{
      body: {
        a: 'b',
      },
      autohandle: 'form',
    },).body,).to.equal('a=b',);
  },);
  it('prepare should not transform by default', () => {
    expect(Encoding.prepare(<Request><unknown>{
      body: {},
    },).body,).to.deep.equal({},);
  },);
},);
