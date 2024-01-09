import DefaultMeta from '../../src/components/default-meta.tsx';
import {
  expect,
} from 'chai';

describe('components/default-meta', () => {
  it('should be a function', () => {
    expect(DefaultMeta,).to.be.a('function',);
  },);
  it('() should be an object', () => {
    const result = DefaultMeta({
      page: 'home',
      path: '',
    },);
    expect(result,).to.be.a('object',);
  },);
},);
