import {
  BASE_10_RADIX,
  EMPTY,
  FIFTH_ARGUMENT,
  FIRST_ARGUMENT,
  FOURTH_ARGUMENT,
  SECOND_ARGUMENT,
  THIRD_ARGUMENT,
  ONE, DEFAULT_LANGUAGE,
} from '../constants.js';
import fse from 'fs-extra';
import reqlib from 'app-root-path';
import {
  run,
} from '../main.js';
import language, {
  locale,
} from '../helper/language.js';
import jobCreator from '../helper/job-creator.js';

// eslint-disable-next-line complexity
const loadUp = async(args: string[],) => {
  let threads = Number.parseInt(
    args[FIRST_ARGUMENT] || '1',
    BASE_10_RADIX,
  );
  const repeats = Number.parseInt(
    args[SECOND_ARGUMENT] || '100',
    BASE_10_RADIX,
  );
  const lang = args[THIRD_ARGUMENT] || 'en';
  const increment = Number.parseInt(
    args[FOURTH_ARGUMENT] || '1',
    BASE_10_RADIX,
  );
  const maximum = Number.parseInt(
    args[FIFTH_ARGUMENT] || '100',
    BASE_10_RADIX,
  );
  await locale(lang || DEFAULT_LANGUAGE,);
  if (maximum < threads) {
    throw new Error(language('maximum_below_threads',),);
  }
  if (increment < ONE) {
    throw new Error(language('increment_below_one',),);
  }
  if (maximum < ONE) {
    throw new Error(language('maximum_below_one',),);
  }
  const runs = {};
  const job = await jobCreator(`${ reqlib }`,);
  for (const task of job.main || []) {
    do {
      // eslint-disable-next-line no-await-in-loop
      await run({
        language: lang,
        mode: 'load-testing',
      }, threads, repeats, {
        ...job,
        main: [ task, ],
      },);
      const execution = fse.readJsonSync(reqlib + '/result.json', 'utf-8',);
      let hasErrors = false;
      for (const test of Object.keys(run,)) {
        hasErrors = hasErrors || execution[test].errors > EMPTY;
        runs['test x' + threads] = execution[test];
      }
      if (hasErrors) {
        break;
      }
      threads += increment;
    } while (threads <= maximum);
  }
  fse.writeJsonSync(reqlib + '/result.json', runs,);
};
export default loadUp;
