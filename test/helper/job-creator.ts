import jobCreator from '../../src/helper/job-creator';
import {
  expect,
} from 'chai';
import 'mocha';

describe('helper/job-creator', () => {
  it('should be a string', () => {
    expect(jobCreator,).to.be.a('function',);
  },);
  it('should be match expectations', () => {
    expect(jobCreator(__dirname + '/../../fixtures',),).to.deep.equal({
      'after': [],
      'afterEach': [],
      'afterTask': [],
      'before': [ {
        'id': 'before test',
        'main': {
          'body': '',
          'cookies': {},
          'headers': {},
          'method': 'get',
          'url': 'http://localhost',
        },
      }, ],
      'beforeEach': [],
      'beforeTask': [],
      'main': [ {
        'id': 'main test',
        'main': {
          'body': '',
          'cookies': {},
          'headers': {},
          'method': 'head',
          'url': 'http://localhost',
        },
      }, ],
    },);
  },);
},);
