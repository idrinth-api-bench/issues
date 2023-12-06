import jobCreator from '../../src/helper/job-creator.js';
import {
  expect, use as chaiUse,
} from 'chai';
import 'mocha';
import * as url from 'url';
import chaiAsPromised from 'chai-as-promised';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url,),);

chaiUse(chaiAsPromised,);
describe('helper/job-creator', () => {
  it('should be a string', () => {
    expect(jobCreator,).to.be.a('function',);
  },);
  it('should be match expectations', () => {
    const result = jobCreator(__dirname + '../../fixtures',);
    expect(result,).to.eventually.deep.equal({
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
      'main': [
        {
          'id': 'main test',
          'main': {
            'body': '',
            'cookies': {},
            'headers': {},
            'method': 'head',
            'url': 'http://localhost',
          },
        },
        {
          'id': 'main test 2',
          'main': {
            'body': '',
            'cookies': {},
            'headers': {},
            'method': 'put',
            'url': 'http://localhost',
          },
        },
      ],
    },);
  },);
},);
