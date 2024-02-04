import jobCreator from '../../src/helper/job-creator.js';
import {
  expect,
} from 'chai';
import 'mocha';
import url from 'url';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url,),);

describe('helper/job-creator', () => {
  it('should be a string', () => {
    expect(jobCreator,).to.be.a('function',);
  },);
  it('should be match expectations', async() => {
    const result = await jobCreator(__dirname + '../../fixtures',);
    expect(result,).to.deep.equal({
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
