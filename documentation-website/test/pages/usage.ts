import Usage from '../../src/pages/usage/index.jsx';
import {
  expect,
} from 'chai';

describe('pages/usage', () => {
  it('should be a function', () => {
    expect(Usage,).to.be.a('function',);
  },);
  it('() should be an object', () => {
    const result = Usage();
    expect(result,).to.be.a('object',);
  },);
},);
