import NoProgress from '../../src/progress/no-progress';
import {
  expect,
} from 'chai';
import 'mocha';

const THREADS = 2;
const REPETITIONS = 1;

describe('progress/no-progress', () => {
  it('should be a class', () => {
    expect(NoProgress,).to.be.a('function',);
  },);
  const noProgress = new NoProgress();
  it('should have a start method', () => {
    expect(noProgress.start,).to.be.a('function',);
    describe('progress/no-progress::start', () => {
      it('does not throw', () => {
        expect(() => noProgress.start({
          after: [],
          afterEach: [],
          afterTask: [],
          before: [],
          beforeEach: [],
          beforeTask: [],
          main: [],
        }, REPETITIONS, THREADS,),).to.not.throw();
      },);
    },);
  },);
  it('should have a stop method', () => {
    expect(noProgress.stop,).to.be.a('function',);
    describe('progress/no-progress::stop', () => {
      it('does not throw', () => {
        expect(() => noProgress.stop(),).to.not.throw();
      },);
    },);
  },);
  it('should have a increment method', () => {
    expect(noProgress.increment,).to.be.a('function',);
    describe('progress/no-progress::increment', () => {
      it('does not throw', () => {
        expect(() => noProgress.increment(),).to.not.throw();
      },);
    },);
  },);
},);
