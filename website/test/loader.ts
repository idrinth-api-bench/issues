import Loader from '../src/loader.tsx';
import {
  expect,
} from 'chai';

describe('pages/usage', () => {
  it('should be a function', () => {
    expect(Loader,).to.be.a('function',);
  },);
  it('() should be an object', () => {
    const result = Loader();
    expect(result,).to.be.a('object',);
  },);
},);
