import QuickStart from '../../src/pages/quick-start/index.jsx';
import {
  expect,
} from 'chai';

describe('pages/quick-start', () => {
  it('should be a function', () => {
    expect(QuickStart,).to.be.a('function',);
  },);
  it('() should be an object', () => {
    const result = QuickStart();
    expect(result,).to.be.a('object',);
  },);
},);
