import userAgent from '../../src/helper/user-agent.js';
import {
  expect,
} from 'chai';
import 'mocha';

describe('helper/user-agent', () => {
  it('should be a string', () => {
    expect(userAgent,).to.be.a('string',);
  },);
  it('should be match expectations', () => {
    expect(userAgent,).to.match(
      /^@idrinth\/api-bench\/[0-9]+\.[0-9]+ needle\/[0-9]+\.[0-9]+$/u,
    );
  },);
},);
