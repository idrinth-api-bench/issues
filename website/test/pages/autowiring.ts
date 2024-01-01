import Autowiring from '../../src/pages/autowiring/index.jsx';
import {
  expect,
} from 'chai';

describe('pages/autowiring', () => {
  it('should be a function', () => {
    expect(Autowiring,).to.be.a('function',);
  },);
  it('() should be an object', () => {
    const result = Autowiring();
    expect(result,).to.be.a('object',);
  },);
},);
