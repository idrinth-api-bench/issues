import Results from '../../src/pages/results/index.jsx';
import {
  expect,
} from 'chai';

describe('pages/results', () => {
  it('should be a function', () => {
    expect(Results,).to.be.a('function',);
  },);
  it('() should be an object', () => {
    const result = Results();
    expect(result,).to.be.a('object',);
  },);
},);
