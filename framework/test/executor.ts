import executor from '../src/executor.js';
import Thread from '../src/worker/thread.js';
import {
  expect,
} from 'chai';
import 'mocha';
import {
  NullLogger,
} from '../src/logger/null-logger.js';
import {
  Result,
} from '../src/result.js';
import {
  FinishedSet,
} from '../src/finished-set.js';
import {
  Task,
} from '../src/task.js';
import {
  ValidationResult,
} from '../src/validation-result.js';
import Job from '../src/job.js';
import NoopStorage from '../src/storage/noop-storage.js';
import NoProgress from '../src/progress/no-progress.js';
import Counter from '../src/counter.js';

// eslint-disable-next-line @typescript-eslint/no-empty-function
const NOOP = () => {};
const NONE = 0;

class FakeResult implements Result, ValidationResult, FinishedSet {

  public duration;

  public id = 'some-id';

  public errors: number;

  public count: number;

  public avg100: number;

  public median100: number;

  public max100: number;

  public min100: number;

  public avg80: number;

  public median80: number;

  public max80: number;

  public min80: number;

  public stdv80: number;

  public stdv100: number;

  public response = {
    headers: {},
    cookies: {},
    body: '',
    uri: '',
    status: 202,
  };

  public validators = [];

  public durations;

  public msgs = {};

  success = true;

  public constructor() {
    const requests = 1;
    this.errors = requests;
    this.count = requests;
    const duration = 9;
    this.duration = duration;
    this.avg100 = duration;
    this.avg80 = duration;
    this.durations = [ duration, ];
    this.max100 = duration;
    this.max80 = duration;
    this.min100 = duration;
    this.min80 = duration;
    this.median100 = duration;
    this.median80 = duration;
    this.stdv100 = 100;
    this.stdv80 = 80;
  }

  public add() {
    this.count ++;
  }
}
class FakeWorker implements Thread {
  private handler;

  public static built = {};

  public static terminated = {};

  private result = new FakeResult();

  public constructor(private path: string,) {
    FakeWorker.built[path] = FakeWorker.built[path] || NONE;
    FakeWorker.built[path] ++;
  }

  public on(
    event: 'message',
    callable: (a: unknown, self: Thread,)=>void,
  ): void {
    this.handler = callable;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public postMessage(a: unknown,): void {
    const c = this.handler;
    const result = this.result;
    const next = 1;
    setTimeout(() => c(result, this,), next,);
  }

  public terminate(): void {
    FakeWorker.terminated[this.path] = FakeWorker.terminated[this.path] || NONE;
    FakeWorker.terminated[this.path] ++;
  }
}

describe('executor', () => {
  before(() => {
    Counter.clear();
  },);
  after(() => {
    Counter.clear();
  },);
  const repeats = 2;
  const threads = 3;
  const tasks = [ <Task> {
    id: 'test',
  }, ];
  const noJob: Job = {
    before: [],
    beforeTask: [],
    beforeEach: [],
    main: [],
    afterEach: [],
    afterTask: [],
    after: [],
  };
  const job: Job = {
    ...noJob,
    main: tasks,
  };
  it('should be a function', () => {
    expect(executor,).to.be.a('function',);
  },);
  it('should not try to execute no tasks(0 tasks)', () => {
    expect(
      () => executor(
        threads,
        repeats,
        noJob,
        NOOP,
        new NullLogger(),
        FakeWorker,
        [],
        new NoopStorage(),
        '/executor',
        new NoProgress(),
      ),
    ).to.throw('Can\'t measure zero tasks.',);
  },);
  it('should not try to execute no tasks(0 threads)', () => {
    expect(
      () => executor(
        NONE,
        repeats,
        job,
        NOOP,
        new NullLogger(),
        FakeWorker,
        [],
        new NoopStorage(),
        '/executor',
        new NoProgress(),
      ),
    ).to.throw('Can\'t measure zero tasks.',);
  },);
  it('should not try to execute no tasks (0 repeats)', () => {
    expect(
      () => executor(
        threads,
        NONE,
        job,
        NOOP,
        new NullLogger(),
        FakeWorker,
        [],
        new NoopStorage(),
        '/executor',
        new NoProgress(),
      ),
    ).to.throw('Can\'t measure zero tasks.',);
  },);
},);
