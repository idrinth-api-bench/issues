import mock = require('mock-fs');
import htmlReporter from '../../src/reporter/html-reporter.js';
import {
  expect,
} from 'chai';
import 'mocha';
import {
  readFileSync,
} from 'fs';

const WAIT_TIME = 1500;

describe('reporter/html-reporter', () => {
  before(() => {
    mock({
      '/html1': mock.directory({},),
      '/html2': mock.directory({},),
    },);
  },);
  after(() => {
    mock.restore();
  },);
  it('should be a function', () => {
    expect(htmlReporter,).to.be.a('function',);
  },);
  it('should create a html file', (done,) => {
    const file = '/html1/result.html';
    const results = {
      any: {
        id: '1',
        errors: 4,
        count: 2,
        avg100: 6,
        median100: 33,
        min100: 1,
        max100: 199,
        avg80: 6,
        median80: 33,
        min80: 12,
        max80: 99,
        stdv100: 9,
        stdv80: 8,
        msgs: {
          'some error message': 4,
        },
      },
    };
    htmlReporter(results, '/html1',);
    setTimeout(() => {
      // eslint-disable-next-line no-unused-expressions
      expect(readFileSync(file,) + '',).to.not.be.empty;
      done();
    }, WAIT_TIME,);
  },);
  it('should create a html file with matching contents', (done,) => {
    const file = '/html2/result.html';
    const results = {
      any: {
        id: '1',
        errors: 14,
        count: 7,
        avg100: 6,
        median100: 33,
        min100: 1,
        max100: 99,
        avg80: 76,
        median80: 33,
        min80: 14,
        max80: 99,
        stdv100: 9,
        stdv80: 8,
        msgs: {
          'some error message': 4,
        },
      },
    };
    htmlReporter(results, '/html2',);
    setTimeout(() => {
      expect(readFileSync(file,) + '',).to.equal(
        '<!DOCTYPE HTML><html lang="en"><head><title>API-Bench Report</title>' +
        '<meta charset="UTF-8"></head><body><h1>API-Bench Report</h1>' +
        '<table><thead><tr><th></th><th>Count</th><th>Errors</th>' +
        '<th>Average 80%</th><th>Average 100%</th><th>Minimum 80%</th>' +
        '<th>Minimum 100%</th><th>Maximum 80%</th><th>Maximum 100%</th>' +
        '<th>Median 80%</th><th>Median 100%</th>' +
        '<th>Standard Deviation 80%</th><th>Standard Deviation 100%</th>' +
        '<th>Messages</th></tr></thead><tbody><tr><th>any</th><td>7</td>' +
        '<td>14</td><td>76</td><td>6</td><td>14</td><td>1</td><td>99</td>' +
        '<td>99</td><td>33</td><td>33</td><td>8</td><td>9</td>' +
        '<td>{"some error message":4}</td></tr></tbody></table>' +
        '</body></html>',
      );
      done();
    }, WAIT_TIME,);
  },);
},);
