import lighthouse from 'lighthouse';
import * as chromeLauncher from 'chrome-launcher';
import process from 'process';
import {
  EXIT_FAILURE,
  EXIT_SUCCESS,
  LOCAL_URL,
  MAX_RETRIES,
} from './constants.js';

const chrome = await chromeLauncher.launch({
  chromeFlags: [ '--headless', ],
},);

const options = {
  logLevel: 'error',
  output: 'json',
  port: chrome.port,
};
const metricFields = {
  performance: 0.55,
  accessibility: 0.85,
  'best-practices': 1,
  seo: 1,
  pwa: 0.35,
};

let success = true;
let tries = 0;

do {
  tries ++;
  process.exitCode = EXIT_SUCCESS;
  const report = JSON.parse(
    // eslint-disable-next-line no-await-in-loop
    (await lighthouse(LOCAL_URL, options,)).report,
  );

  for (const metricField of Object.keys(metricFields,)) {
    if (! report?.categories[metricField]?.score) {
      success = false;
      break;
    }
  }
  if (success) {
    for (const metricField of Object.keys(metricFields,)) {
      const devMetricScore = report?.categories[metricField]?.score;

      if (devMetricScore < metricFields[metricField]) {
        // eslint-disable-next-line no-console
        console.error(
          // eslint-disable-next-line max-len
          `${ metricField } score reduced to ${ devMetricScore } from ${ metricFields[metricField] }`,
        );
        process.exitCode = EXIT_FAILURE;
      } else {
        // eslint-disable-next-line no-console
        console.log(
          // eslint-disable-next-line max-len
          `${ metricField } score is at ${ devMetricScore }`,
        );
      }
    }
  }
} while (! success && tries < MAX_RETRIES);

process.exit();
