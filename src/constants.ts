import {
  fileURLToPath,
} from 'url';
import {
  realpathSync,
} from 'fs';

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
