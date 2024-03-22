import Loader from '../src/components/loader.tsx';
import {
  expect,
} from 'chai';

describe('pages/usage', () => {
  it('should be a function', () => {
    expect(Loader,).to.be.a('function',);
  },);
  it('() should be an object', () => {
    const result = Loader({
      lnkey: 'test-key',
    },);
    expect(result,).to.be.an('object',);
  },);
},);
