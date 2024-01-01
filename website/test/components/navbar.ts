import Navbar from '../../src/components/navbar.jsx';
import {
  expect,
} from 'chai';

describe('components/navbar', () => {
  it('should be a function', () => {
    expect(Navbar,).to.be.a('function',);
  },);
  it('() should be an object', () => {
    const result = Navbar();
    expect(result,).to.be.a('object',);
  },);
},);
