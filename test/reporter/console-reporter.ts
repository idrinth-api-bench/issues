import makeConsoleMock from 'consolemock';
import consoleReporter from '../../src/reporter/console-reporter.js';
import {
  expect,
} from 'chai';
import 'mocha';

const FIRST = 0;
const ONE_ELEMENT = 1;

describe('reporter/console-reporter', () => {
  it('should be a function', () => {
    expect(consoleReporter,).to.be.a('function',);
  },);
  it('should not throw an error', () => {
    const oldConsole = console;
    // eslint-disable-next-line no-global-assign
    console = makeConsoleMock();
    const results = {
      any: {
        id: '1',
        errors: 4,
        count: 7,
        avg100: 6,
        median100: 33,
        min100: 1,
        max100: 199,
        avg80: 6,
        median80: 33,
        min80: 12,
        max80: 99,
        stdv80: 12,
        stdv100: 99,
      },
    };
    expect(() => consoleReporter(results, '',),).to.not.throw();
    // eslint-disable-next-line no-console
    const history = console.history();
    expect(history,).to.be.an('array',);
    expect(history.length,).to.equal(ONE_ELEMENT,);
    expect(history[FIRST],).to.be.an('object',);
    expect(history[FIRST].LOG,).to.be.an('array',);
    expect(history[FIRST].LOG.length,).to.equal(ONE_ELEMENT,);
    expect(history[FIRST].LOG[FIRST],).to.be.a('string',);
    // eslint-disable-next-line no-global-assign
    console = oldConsole;
  },);
},);
