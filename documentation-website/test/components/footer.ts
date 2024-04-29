import {
  expect,
} from 'chai';
import Window from 'window';
import Footer from '../../src/components/footer.tsx';

const window = new Window();

describe('components/footer', () => {
  it('should be a function', () => {
    expect(Footer,).to.be.a('function',);
  },);
  it('() should be an object', () => {
    const result = Footer(window,);
    expect(result,).to.be.a('object',);
  },);
},);
