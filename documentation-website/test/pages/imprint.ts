import Imprint from '../../src/pages/imprint/index.jsx';
import {
  expect,
} from 'chai';

describe('pages/usage', () => {
  it('should be a function', () => {
    expect(Imprint,).to.be.a('function',);
  },);
  it('() should be an object', () => {
    const result = Imprint();
    expect(result,).to.be.a('object',);
  },);
},);
