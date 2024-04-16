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
  logLevel: 'error',
  output: 'json',
  port: chrome.port,
};

const devSiteReport = await lighthouse('http://localhost:8080/', options,);
const dev_report = JSON.parse(devSiteReport.report,);

const metricFields = {
  performance: 0.55,
  accessibility: 0.85,
  'best-practices': 1,
  seo: 1,
  pwa: 0.9,
};

for (const metricField of Object.keys(metricFields,)) {
  const devMetricScore = dev_report?.categories[metricField]?.score;

  if (! devMetricScore) {
    // eslint-disable-next-line no-console
    console.error(
      // eslint-disable-next-line max-len
      `Failure in fetching metric score for current site, found ${ metricField } to be null`,
    );
    process.exitCode = EXIT_FAILURE;
  } else if (devMetricScore < metricFields[metricField]) {
    // eslint-disable-next-line no-console
    console.error(
      // eslint-disable-next-line max-len
      `${ metricField } score reduced to ${ devMetricScore } from ${ metricFields[metricField] }`,
    );
    process.exitCode = EXIT_FAILURE;
  } else {
    // eslint-disable-next-line no-console
    console.error(
      // eslint-disable-next-line max-len
      `${ metricField } score is at ${ devMetricScore }`,
    );
  }
}
process.exit();
