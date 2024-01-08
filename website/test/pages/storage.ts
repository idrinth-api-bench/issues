import Storage from '../../src/pages/usage/storage/index.jsx';
import {
  expect,
} from 'chai';

describe('pages/storage', () => {
  it('should be a function', () => {
    expect(Storage,).to.be.a('function',);
  },);
  it('() should be an object', () => {
    const result = Storage();
    expect(result,).to.be.a('object',);
  },);
},);
