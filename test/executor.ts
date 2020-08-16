import executor, { Thread } from '../src/executor';
import {
  expect,
} from 'chai';
import 'mocha';
import { NullLogger } from '../src/logger/null-logger';
import { Result } from '../src/result';
import { ResultSet } from '../src/result-set';
import { FinishedSet } from '../src/finished-set';
import { PinoWrapper } from '../src/logger/pino-wrapper';
import { Task } from '../src/task';
const pino = require('pino',);

class FakeResult implements Result,ResultSet,FinishedSet {
    public id = 'some-id';
    public errors = 1;
    public count  = 0;
    public avg100 = 9;
    public median100 = 9;
    public max100 = 9;
    public min100 = 9;
    public avg80 = 9;
    public median80 = 9;
    public max80 = 9;
    public min80 = 9;
    public duration = 9;
    public response = {
      headers: {},
      cookies: {},
      body: '',
      uri: '',
      status: 202,
    };
    public validators = [];
    public durations = [9];
    public msgs = {};
    public add() {
      this.count++;
    };
};
class FakeWorker implements Thread {
  private handler;
  public static built = {};
  public static terminated = {};
  private result = new FakeResult();
  public constructor(private path: string)
  {
    FakeWorker.built[path] = FakeWorker.built[path] || 0;
    FakeWorker.built[path]++;
  }
  public on(type: string, callable: (a: unknown)=>void): void
  {
    this.handler = callable;
  }
  public postMessage(a: unknown): void {
    const c = this.handler;
    const result = this.result;
    setTimeout(() => c(result), 1);
  }
  public terminate(): void
  {
    FakeWorker.terminated[this.path] = FakeWorker.terminated[this.path] || 0;
    FakeWorker.terminated[this.path]++;
  }
}

describe('executor', () => {
  it('should be a function', () => {
    expect(executor,).to.be.a('function',);
  },);
  it ('should not try to execute no tasks(0 tasks)', () => {
    expect(() => executor(3, 2, [], () => {}, new NullLogger(), FakeWorker)).to.throw("Can't measure no tasks.");
  });
  it ('should not try to execute no tasks(0 repeats)', () => {
    expect(() => executor(0, 2, [<Task> {id: 'test'}], () => {}, new NullLogger(), FakeWorker)).to.throw("Can't measure no tasks.");
  });
  it ('should not try to execute no tasks (0 threads)', () => {
    expect(() => executor(3, 0, [<Task> {id: 'test'}], () => {}, new NullLogger(), FakeWorker)).to.throw("Can't measure no tasks.");
  });
  it ('should execute all tasks', (done) => {
    executor(3, 2, [<Task> {id: 'test'}], () => done(), new NullLogger(), FakeWorker);
  });
  it ('should have build the right workers', () => {
    expect(FakeWorker.built).to.deep.equal({
      "./worker/calculator.js": 1,
      "./worker/validator.js": 1,
      "./worker/webrequest.js": 3,
    });
  });
  it ('should have shut down the right workers', () => {
    expect(FakeWorker.terminated).to.deep.equal({
      "./worker/calculator.js": 1,
      "./worker/validator.js": 1,
      "./worker/webrequest.js": 3,
    });
  });
},);
