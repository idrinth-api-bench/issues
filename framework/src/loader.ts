import {
  BASE_10_RADIX,
  EMPTY,
  FIFTH_ARGUMENT,
  FIRST_ARGUMENT,
  FOURTH_ARGUMENT,
  SECOND_ARGUMENT,
  THIRD_ARGUMENT,
} from './constants.js';
import fse from 'fs-extra';
import reqlib from 'app-root-path';
import {
  run,
} from './main.js';

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
  const language = args[THIRD_ARGUMENT] || 'en';
  const increment = Number.parseInt(
    args[FOURTH_ARGUMENT] || '1',
    BASE_10_RADIX,
  );
  const maximum = Number.parseInt(
    args[FIFTH_ARGUMENT] || '100',
    BASE_10_RADIX,
  );
  const runs = {};
  do {
    // eslint-disable-next-line no-await-in-loop
    await run({
      language: language,
      mode: 'load-testing',
    }, threads, repeats,);
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
  fse.writeJsonSync(reqlib + '/result.json', runs,);
};
export default loadUp;
