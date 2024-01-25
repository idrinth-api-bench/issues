import {
  BASE_10_RADIX,
  EMPTY,
  FIFTH_ARGUMENT,
  FIRST_ARGUMENT,
  FOURTH_ARGUMENT,
  FRAMEWORK_ROOT,
  SECOND_ARGUMENT,
  THIRD_ARGUMENT,
} from './constants.js';
import {
  execSync,
} from 'child_process';
import fse from 'fs-extra';
import reqlib from 'app-root-path';

// eslint-disable-next-line complexity
const loadUp = (args: string[],) => {
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
    execSync(
      `node ${ FRAMEWORK_ROOT }/bin/run-benchmark.js `
      + `${ threads } ${ repeats } ${ language }`,
      {
        stdio: 'inherit',
      },
    );
    const run = fse.readJsonSync(reqlib + '/result.json', 'utf-8',);
    let hasErrors = false;
    for (const test of Object.keys(run,)) {
      hasErrors = hasErrors || run[test].errors > EMPTY;
      runs['test x' + threads] = run[test];
    }
    if (hasErrors) {
      break;
    }
    threads += increment;
  } while (threads <= maximum);
  fse.writeJsonSync(reqlib + '/result.json', runs,);
};
export default loadUp;
