import Middlewares from '../../src/pages/usage/middlewares/index.jsx';
import {
  expect,
} from 'chai';

describe('pages/middlewares', () => {
  it('should be a function', () => {
    expect(Middlewares,).to.be.a('function',);
  },);
  it('() should be an object', () => {
    const result = Middlewares();
    expect(result,).to.be.a('object',);
  },);
},);
