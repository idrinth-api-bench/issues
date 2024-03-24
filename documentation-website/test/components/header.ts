import Header from '../../src/components/header.tsx';
import {
  expect,
} from 'chai';
import Window from 'window';

const window = new Window();

describe('components/navbar', () => {
  it('should be a function', () => {
    expect(Header,).to.be.a('function',);
  },);
  it('() should be an object', () => {
    const result = Header(window,);
    expect(result,).to.be.an('object',);
  },);
},);
