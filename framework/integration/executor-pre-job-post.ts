import mock from 'mock-fs';
import executor from '../src/executor';
import Thread from '../src/worker/thread';
import {
  expect,
} from 'chai';
import 'mocha';
import NullLogger from '../src/logger/null-logger';
import Result from '../src/result';
import FinishedSet from '../src/finished-set';
import Task from '../src/task';
import ValidationResult from '../src/validation-result';
import {
  realpathSync,
} from 'fs';
import Job from '../src/job';
import NoopStorage from '../src/storage/noop-storage';
import makeConsoleMock from 'consolemock';
import NoProgress from '../src/progress/no-progress';
import Counter from '../src/counter';
import {
  TEMP_DIR,
} from '../src/constants';
import prepareTempDir from './prepare-temp-dir';

const NONE = 0;
const SETUP_TIMEOUT = 10000;

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

  public on(type: string, callable: (a: unknown)=>void,): void {
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

describe('executor@pre-post-job', () => {
  let oldConsole;
  before(() => {
    oldConsole = console;
    // eslint-disable-next-line no-global-assign
    console = makeConsoleMock();
    Counter.clear();
  },);
  after(() => {
    // eslint-disable-next-line no-global-assign
    console = oldConsole;
    Counter.clear();
  },);
  beforeEach(() => {
    prepareTempDir();
    const config = {};
    config[process.cwd()] = mock.load(process.cwd(),);
    config[`${ TEMP_DIR }/executor-ppj`] = mock.directory({},);
    mock(config, {
      createCwd: false,
    },);
  },);
  afterEach(() => {
    mock.restore();
    prepareTempDir();
  },);
  const repeats = 2;
  const threads = 3;
  const setup = 2;
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
  const prePostJob: Job = {
    ...job,
    before: tasks,
    after: tasks,
  };
  const once = 1;
  it('should execute all tasks and pre and post', (done,) => {
    FakeWorker.built = {};
    FakeWorker.terminated = {};
    expect(
      () => executor(
        threads,
        repeats,
        prePostJob,
        () => done(),
        new NullLogger(),
        FakeWorker,
        [],
        new NoopStorage(),
        `${ TEMP_DIR }/executor-ppj`,
        new NoProgress(),
        [],
      ),
    ).to.not.throw();
    describe('executor::workers', () => {
      it('should have build the right workers after pre and post', () => {
        const output = {};
        output[realpathSync('./worker/calculator.js',)] = once;
        output[realpathSync('./worker/webrequest.js',)] = threads + setup;
        expect(FakeWorker.built,).to.deep.equal(output,);
      },);
      it('should have shut down the right workers after pre and post', () => {
        const output = {};
        output[realpathSync('./worker/calculator.js',)] = once;
        output[realpathSync('./worker/webrequest.js',)] = threads + setup;
        expect(FakeWorker.terminated,).to.deep.equal(output,);
      },);
    },);
  },);
},).timeout(SETUP_TIMEOUT,);
