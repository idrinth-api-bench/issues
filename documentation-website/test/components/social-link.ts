import SL from '../../src/components/social-link.tsx';
import {
  expect,
} from 'chai';

describe('components/social-link', () => {
  it('should be a function', () => {
    expect(SL,).to.be.a('function',);
  },);
  it('() should be an object', () => {
    const result = SL({
      to: '/',
      label: '',
    },);
    expect(result,).to.be.a('object',);
  },);
},);
