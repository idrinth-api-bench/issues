import Sponsors from '../../src/pages/contributing/sponsors/index.jsx';
import {
  expect,
} from 'chai';

describe('pages/sponsors', () => {
  it('should be a function', () => {
    expect(Sponsors,).to.be.a('function',);
  },);
  it('() should be an object', () => {
    const result = Sponsors();
    expect(result,).to.be.a('object',);
  },);
},);
