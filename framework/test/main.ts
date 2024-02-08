import {
  run,
} from '../src/main.js';
import {
  expect,
} from 'chai';
import 'mocha';

const ONE = 1;

describe('main', () => {
  it('should be a function', () => {
    expect(run,).to.be.a('function',);
  },);
  it('can be called with 4 params', async() => {
    try {
      await run({}, ONE, ONE, [],);
      // eslint-disable-next-line no-unused-expressions
      expect(false,).to.be.true;
    } catch (e) {
      expect(`${ e }`,).to.equal('Error: Can\'t measure zero tasks.',);
    }
  },);
  it('will filter out by id', async() => {
    try {
      await run({
        taskId: 'example',
      }, ONE, ONE, [{
        id: 'wrong',
        main: {
          method: 'get',
          url: 'http://localhost',
        },
      },],);
      // eslint-disable-next-line no-unused-expressions
      expect(false,).to.be.true;
    } catch (e) {
      expect(`${ e }`).to.equal('Error: Can\'t measure zero tasks.',);
    }
  },);
},);
