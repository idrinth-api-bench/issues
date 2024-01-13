import ProgressBar from '../../src/progress/progress-bar';
import {
  expect,
} from 'chai';
import 'mocha';

const THREADS = 2;
const REPETITIONS = 1;

describe('progress/progress-bar', () => {
  it('should be a class', () => {
    expect(ProgressBar,).to.be.a('function',);
  },);
  const progressBar = new ProgressBar();
  it('should have a start method', () => {
    expect(progressBar.start,).to.be.a('function',);
    describe('progress/progress-bar::start', () => {
      it('does not throw', () => {
        expect(() => progressBar.start({
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
  it('should have a increment method', () => {
    expect(progressBar.increment,).to.be.a('function',);
    describe('progress/progress-bar::increment', () => {
      it('does not throw', () => {
        expect(() => progressBar.increment(),).to.not.throw();
      },);
    },);
  },);
  it('should have a stop method', () => {
    expect(progressBar.stop,).to.be.a('function',);
    describe('progress/progress-bar::stop', () => {
      it('does not throw', () => {
        expect(() => progressBar.stop(),).to.not.throw();
      },);
    },);
  },);
},);
