import lighthouse from 'lighthouse';
import * as chromeLauncher from 'chrome-launcher';
import jp from 'jsonpath';
import process from 'process';
import {
  EXIT_FAILURE,
  EXIT_SUCCESS,
  FIRST_MATCH,
} from './constants.js';

const chrome = await chromeLauncher.launch({
  chromeFlags: [ '--headless', ],
},);

const options = {
  logLevel: 'info',
  output: 'json',
  port: chrome.port,
};

let EXIT_CODE = EXIT_SUCCESS;

try {
  // eslint-disable-next-line max-len
  const liveSiteReport = await lighthouse('https://idrinth-api-ben.ch/', options,);
  const prod_report = JSON.parse(liveSiteReport.report,);

  const devSiteReport = await lighthouse('http://localhost:8080/', options,);
  const dev_report = JSON.parse(devSiteReport.report,);

  const metricFields = [
    {
      jsonpath: '$.categories.performance.score',
      name: 'performance',
    },
    {
      jsonpath: '$.categories.accessibility.score',
      name: 'accessibility',
    },
    {
      jsonpath: '$.categories.best-practices.score',
      name: 'best practices',
    },
    {
      jsonpath: '$.categories.seo.score',
      name: 'seo',
    },
    {
      jsonpath: '$.categories.pwa.score',
      name: 'progressive web app',
    },
  ];

  for (const metricField of metricFields) {
    const devMetricScore = jp.query(
      dev_report,
      metricField.jsonpath,
    )[FIRST_MATCH];
    const prodMetricScore = jp.query(
      prod_report,
      metricField.jsonpath,
    )[FIRST_MATCH];

    if (devMetricScore === null) {
      throw new Error(
        // eslint-disable-next-line max-len
        `Failure in fetching metric score for current site, found ${ metricField.name } to be null`,
      );
    }

    if (devMetricScore < prodMetricScore) {
      // eslint-disable-next-line no-console
      console.error(
        // eslint-disable-next-line max-len
        `${ metricField.name } score reduced to ${ devMetricScore } from ${ prodMetricScore }`,
      );
      EXIT_CODE = EXIT_FAILURE;
    }
  }
} catch (err) {
  // eslint-disable-next-line no-console
  console.error(err,);
  EXIT_CODE = EXIT_FAILURE;
}

process.exit(EXIT_CODE,);
