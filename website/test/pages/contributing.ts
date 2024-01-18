import Contributing from '../../src/pages/contributing/index.jsx';
import {
  expect,
} from 'chai';

describe('pages/contributing', () => {
  it('should be a function', () => {
    expect(Contributing,).to.be.a('function',);
  },);
  it('() should be an object', () => {
    const result = Contributing();
    expect(result,).to.be.a('object',);
  },);
},);
