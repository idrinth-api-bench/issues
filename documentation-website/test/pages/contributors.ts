import Contributors from '../../src/pages/contributing/contributors/index.jsx';
import {
  expect,
} from 'chai';

describe('pages/contributors', () => {
  it('should be a function', () => {
    expect(Contributors,).to.be.a('function',);
  },);
  it('() should be an object', () => {
    const result = Contributors();
    expect(result,).to.be.a('object',);
  },);
},);
