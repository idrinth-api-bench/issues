import Breadcrumbs from '../../src/components/breadcrumbs.tsx';
import {
  expect,
} from 'chai';

describe('components/footer', () => {
  it('should be a function', () => {
    expect(Breadcrumbs,).to.be.a('function',);
  },);
  it('() should be an object', () => {
    const result = Breadcrumbs({
      path: '/',
    },);
    expect(result,).to.be.a('object',);
  },);
},);
