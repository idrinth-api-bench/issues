import {
  fileURLToPath,
} from 'url';
import {
  existsSync,
  realpathSync,
} from 'fs';
import {
  tmpdir,
} from 'os';

export const STARTED = new Date();
export const FIRST_MATCH = 1;
export const INDENTATION_SPACES = 2;
export const EMPTY = 0;
export const INITIAL_ZERO = 0;
export const FIRST_ARGUMENT = 2;
export const SECOND_ARGUMENT = 3;
export const FRAMEWORK_ROOT = realpathSync(
  fileURLToPath(
    new URL('.', import.meta.url,),
  ) + '../',
);
export const THIRD_ARGUMENT = 4;
export const FOURTH_ARGUMENT = 5;
export const FIFTH_ARGUMENT = 6;
export const BASE_10_RADIX = 10;
export const COUNTER_STEP = 1;
export const DEFAULT_THREADS = 10;
export const DEFAULT_REPETITIONS = 1000;
export const DEFAULT_LANGUAGE = 'en';
export const FIRST = 0;
export const SECOND = 1;
export const PERCENT10 = 0.1;
export const PERCENT90 = 0.9;
export const ARRAY_LENGTH_OFFSET = 1;
export const THOUSAND = 1000;
export const SINGLE = 1;
export const STRING_LIMITER_REMOVAL_START = 1;
export const STRING_LIMITER_REMOVAL_LENGTH = 1;
export const MONTH_OFFSET = 1;
export const TEN = 10;
export const ONE = 1;
export const TWO = 2;
export const FIVE = 5;
export const NEXT = 1;
export const CLI_OPTION_MIN_LENGTH = 3;
export const STATUSCODE_SUCCESS = 0;
export const STATUSCODE_FAILURE = 1;
// Fixes GitHub Action's broken /tmp
export const TEMP_DIR = process.env.RUNNER_TEMP ?? tmpdir();
// Fixes tests running in typescript
export const INCLUDE_EXTENSION = existsSync('./constants.js',) ? '.js' : '.ts';

