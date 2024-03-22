import Logging from '../../src/pages/usage/logging/index.jsx';
import {
  expect,
} from 'chai';

describe('pages/autowiring', () => {
  it('should be a function', () => {
    expect(Logging,).to.be.a('function',);
  },);
  it('() should be an object', () => {
    const result = Logging();
    expect(result,).to.be.a('object',);
  },);
},);
