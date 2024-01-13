import {
  BASE_10_RADIX,
  EMPTY,
  FIRST_ARGUMENT,
  FOURTH_ARGUMENT,
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
  const runs = {};
  do {
    execSync(
      `node node_modules/bin/iabr ${ threads } ${ repeats } ${ language }`,
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
    // eslint-disable-next-line no-constant-condition
  } while (true);
};
export default loadUp;
