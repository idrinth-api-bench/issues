import Footer from '../../src/components/footer.tsx';
import {
  expect,
} from 'chai';

describe('components/footer', () => {
  it('should be a function', () => {
    expect(Footer,).to.be.a('function',);
  },);
  it('() should be an object', () => {
    const result = Footer();
    expect(result,).to.be.a('object',);
  },);
},);
