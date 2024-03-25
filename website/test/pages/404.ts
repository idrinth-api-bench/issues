import NotFound from '../../src/pages/not-found/index.jsx';
import {
  expect,
} from 'chai';

describe('pages/usage', () => {
  it('should be a function', () => {
    expect(NotFound,).to.be.a('function',);
  },);
  it('() should be an object', () => {
    const result = NotFound();
    expect(result,).to.be.a('object',);
  },);
},);
