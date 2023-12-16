import userAgent from '../../src/helper/user-agent.js';
import {
  expect,
} from 'chai';
import 'mocha';

describe('helper/user-agent', () => {
  it('should be a string', () => {
    expect(userAgent,).to.be.a('string',);
  },);
  it('should match expectations', () => {
    expect(userAgent,).to.match(
      /^@idrinth\/api-bench\/[0-9]+\.[0-9]+ needle\/[0-9]+\.[0-9]+$/u,
    );
  },);
  it('should not be needle version 0.0', () => {
    expect(userAgent,).to.not.match(
      /^@idrinth\/api-bench\/[0-9]+\.[0-9]+ needle\/0\.0$/u,
    );
  },);
  it('should not be api-bench version 0.0', () => {
    expect(userAgent,).to.not.match(
      /^@idrinth\/api-bench\/0\.0 needle\/[0-9]+\.[0-9]+$/u,
    );
  },);
},);
