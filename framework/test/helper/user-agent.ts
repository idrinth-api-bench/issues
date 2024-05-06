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
      // eslint-disable-next-line max-len
      /^@idrinth-api-bench\/framework\/\d+\.\d+ @idrinth\/api-bench\/\d+\.\d+ needle\/\d+\.\d+$/u,
    );
  },);
  it('should not be root version 0.0', () => {
    expect(userAgent,).to.not.match(
      // eslint-disable-next-line max-len
      /^@idrinth-api-bench\/framework\/0+\.0+ @idrinth\/api-bench\/\d+\.\d+ needle\/\d+\.\d+$/u,
    );
  },);
  it('should not be needle version 0.0', () => {
    expect(userAgent,).to.not.match(
      // eslint-disable-next-line max-len
      /^@idrinth-api-bench\/framework\/\d+\.\d+ @idrinth\/api-bench\/\d+\.\d+ needle\/0\.0$/u,
    );
  },);
  it('should not be api-bench version 0.0', () => {
    expect(userAgent,).to.not.match(
      // eslint-disable-next-line max-len
      /^@idrinth-api-bench\/framework\/\d+\.\d+ @idrinth\/api-bench\/0\.0 needle\/\d+\.\d+$/u,
    );
  },);
},);
