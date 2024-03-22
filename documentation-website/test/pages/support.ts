import Support from '../../src/pages/support/index.jsx';
import {
  expect,
} from 'chai';

describe('pages/usage', () => {
  it('should be a function', () => {
    expect(Support,).to.be.a('function',);
  },);
  it('() should be an object', () => {
    const result = Support();
    expect(result,).to.be.a('object',);
  },);
},);
