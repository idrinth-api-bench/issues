import lighthouse from 'lighthouse';
import * as chromeLauncher from 'chrome-launcher';
import process from 'process';
import {
  EXIT_FAILURE,
} from './constants.js';

const chrome = await chromeLauncher.launch({
  chromeFlags: [ '--headless', ],
},);

const options = {
  logLevel: 'info',
  output: 'json',
  port: chrome.port,
};

try {
  // eslint-disable-next-line max-len
  const liveSiteReport = await lighthouse('https://idrinth-api-ben.ch/', options,);
  const prod_report = JSON.parse(liveSiteReport.report,);

  const devSiteReport = await lighthouse('http://localhost:8080/', options,);
  const dev_report = JSON.parse(devSiteReport.report,);

  const metricFields = [
    'performance',
    'accessibility',
    'best-practices',
    'seo',
    'pwa',
  ];

  for (const metricField of metricFields) {
    const devMetricScore = dev_report?.categories[metricField]?.score;
    const prodMetricScore = prod_report?.categories[metricField]?.score;

    if (! devMetricScore) {
      throw new Error(
        // eslint-disable-next-line max-len
        `Failure in fetching metric score for current site, found ${ metricField } to be null`,
      );
    }

    if (devMetricScore < prodMetricScore) {
      // eslint-disable-next-line no-console
      console.error(
        // eslint-disable-next-line max-len
        `${ metricField } score reduced to ${ devMetricScore } from ${ prodMetricScore }`,
      );
      process.exitCode = EXIT_FAILURE;
    }
  }
} catch (err) {
  // eslint-disable-next-line no-console
  console.error(err,);
  process.exitCode = EXIT_FAILURE;
}

process.exit();
