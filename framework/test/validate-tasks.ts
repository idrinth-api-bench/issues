import 'mocha';
import {
  expect,
} from 'chai';
import validateTasks from '../src/validate-tasks.js';
import {
  Task,
} from '../src/task.js';

describe('validateTasks', () => {
  it('should be a function', () => {
    expect(validateTasks,).to.be.a('function',);
  },);
  const threads = 33;
  const repetitions = 100;
  const tasks = [ <Task>{
    id: 'test',
  }, ];
  const repeatedIdTasks = [
    <Task>{
      id: 'test',
    },
    <Task>{
      id: '2.',
    },
    <Task>{
      id: 'test',
    },
  ];
  const none = 0;
  it('it should throw if none executlable is given (0 threads)', () => {
    expect(() => validateTasks(repetitions, none, tasks,),).to.throw(
      'Can\'t measure zero tasks.',
    );
  },);
  it('it should throw if none executlable is given (0 repetitions)', () => {
    expect(() => validateTasks(none, threads, tasks,),).to.throw(
      'Can\'t measure zero tasks.',
    );
  },);
  it('it should throw if none executlable is given (0 tasks)', () => {
    expect(() => validateTasks(repetitions, threads, [],),).to.throw(
      'Can\'t measure zero tasks.',
    );
  },);
  it('it should throw if task ids are duplicated', () => {
    expect(
      () => validateTasks(repetitions, threads, repeatedIdTasks,),
    ).to.throw('The id test is shared.',);
  },);
  it('it should not throw if given valid arguments', () => {
    expect(() => validateTasks(repetitions, threads, tasks,),).to.not.throw();
  },);
},);
