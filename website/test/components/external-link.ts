import ExternalLink from '../../src/components/external-link.jsx';
import {
  expect,
} from 'chai';

describe('components/navbar', () => {
  it('should be a function', () => {
    expect(ExternalLink,).to.be.a('function',);
  },);
  it('() should be an object', () => {
    const result = ExternalLink({to: 'https://example.com'});
    expect(result,).to.be.an('object',);
  },);
},);
