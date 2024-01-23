import MailLink from '../../src/components/mail-link.jsx';
import {
  expect,
} from 'chai';

describe('components/navbar', () => {
  it('should be a function', () => {
    expect(MailLink,).to.be.a('function',);
  },);
  it('() should be an object', () => {
    const result = MailLink({
      to: 'info@example.com',
    },);
    expect(result,).to.be.an('object',);
  },);
},);
