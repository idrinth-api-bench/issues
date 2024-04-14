import Reporter from './reporter.js';
import FinishedRun from '../finished-run.js';
import {
  EMPTY,
  FIRST_MATCH,
  INDENTATION_SPACES,
  STARTED,
} from '../constants.js';

const formatDate = (date: Date,) => date
  .toISOString()
  .replace(/\.[0-9]+Z$/u, '+00:00',);

// eslint-disable-next-line complexity
const xray: Reporter = async(
  results: FinishedRun,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  rootDir: string,
): Promise<void> => {
  if (
    ! process.env.XRAY_USER_NAME
    || ! process.env.XRAY_PASSWORD
    || ! process.env.XRAY_ENDPOINT
    || ! process.env.XRAY_TEST_PLAN_KEY
  ) {
    return;
  }
  const end = new Date();
  const data = [];
  for (const id of Object.keys(results,)) {
    data.push({
      testKey: id.match(/#([A-Z]+-[0-9]+)/ug,)[FIRST_MATCH],
      start: formatDate(STARTED,),
      finish: formatDate(end,),
      comment: JSON.stringify(results[id], null, INDENTATION_SPACES,),
      status: results[id].errors > EMPTY ? 'FAILED' : 'PASSED',
    },);
  }
  await fetch(
    process.env.XRAY_ENDPOINT + '/rest/raven/2.0/api/import/execution',
    {
      headers: {
        Authorization: 'Basic ' + Buffer
          .from(
            `${ process.env.XRAY_USER_NAME }:${ process.env.XRAY_PASSWORD }`,
            'utf8',
          )
          .toString('base64',),
      },
      method: 'POST',
      body: JSON.stringify({
        info: {
          summary: '@idrinth/api-bench execution',
          // eslint-disable-next-line max-len
          description: 'This is an automated result export of a run of @idrinth/api-bench',
          startDate: formatDate(STARTED,),
          finishDate: formatDate(end,),
          testPlanKey: process.env.XRAY_TEST_PLAN_KEY,
          testEnvironments: [ process.env.XRAY_ENVIRONMENT, ],
        },
        tests: data,
      },),
    },
  );
};

export default xray;
