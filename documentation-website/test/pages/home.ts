import Home from '../../src/pages/home/index.jsx';
import {
  expect,
} from 'chai';

describe('pages/home', () => {
  it('should be a function', () => {
    expect(Home,).to.be.a('function',);
  },);
  it('() should be an object', () => {
    const result = Home();
    expect(result,).to.be.a('object',);
  },);
},);
