import defaultReporter from '../../src/helper/default-reporter';
import {
  expect,
} from 'chai';
import 'mocha';

describe('helper/default-reporter', () => {
  it('should be a functiom', () => {
    expect(defaultReporter,).to.be.a('function',);
  },);
  it('should be match expectations', () => {
    expect(defaultReporter.addReporter,).to.be.a('function',);
  },);
},);
