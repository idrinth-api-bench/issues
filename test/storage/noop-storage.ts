import NoopStorage from '../../src/storage/noop-storage.js';
import {
  expect,
} from 'chai';
import 'mocha';
import {
  FinishedSet,
} from '../../src/finished-set';

describe('storage/noop-storage', () => {
  it('should be a class', () => {
    expect(NoopStorage,).to.be.a('function',);
  },);
  it('should not throw an error', () => {
    const storage = new NoopStorage();
    const results: FinishedSet = {
      id: '1',
      errors: 4,
      count: 7,
      avg100: 6,
      median100: 33,
      min100: 1,
      max100: 199,
      avg80: 6,
      median80: 33,
      min80: 12,
      max80: 99,
      stdv80: 12,
      stdv100: 99,
    };
    expect(() => storage.store(results, new Date(),),).to.not.throw();
  },);
},);
