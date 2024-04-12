import lighthouse from 'lighthouse';
import * as chromeLauncher from 'chrome-launcher';
import jp from 'jsonpath';
import process from 'process';

const chrome = await chromeLauncher.launch({
  chromeFlags: [ '--headless', ],
},);

const options = {
  logLevel: 'info',
  output: 'json',
  port: chrome.port,
};

//get live site report from lighthouse
//eslint-disable-next-line max-len
const liveSiteReport = await lighthouse('https://idrinth-api-ben.ch/', options,);
const prod_report = JSON.parse(liveSiteReport.report,);

const devSiteReport = await lighthouse('http://localhost:5173/', options,);
const dev_report = JSON.parse(devSiteReport.report,);

//$.categories.performance.score,accessibility,best-practices,seo,pwa,
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
  const devMetricScore = jp.query(dev_report, metricField.jsonpath,);
  const prodMetricScore = jp.query(prod_report, metricField.jsonpath,);

  if (devMetricScore < prodMetricScore) {
    // eslint-disable-next-line no-console
    console.error(
      // eslint-disable-next-line max-len
      `${ metricField.name } score reduced to ${ devMetricScore } from ${ prodMetricScore }`,
    );
    // eslint-disable-next-line no-magic-numbers
    process.exit(1,);
  }
}

// eslint-disable-next-line no-magic-numbers
process.exit(0,);
