import {
  run,
} from './main.js';
import {
  config,
} from 'dotenv';
import reqlib from 'app-root-path';
import {
  existsSync,
} from 'fs';

const FIRST_ARGUMENT = 2;
const SECOND_ARGUMENT = 3;
const THIRD_ARGUMENT = 4;
const BASE_10_RADIX = 10;

export default async(args: string[]) => {
  const threads = Number.parseInt(
    args[FIRST_ARGUMENT] || '1',
    BASE_10_RADIX,
  );
  const repeats = Number.parseInt(
    args[SECOND_ARGUMENT] || '1',
    BASE_10_RADIX,
  );

  if (existsSync(reqlib + '/.env',)) {
    config({
      path: reqlib + '/.env',
    },);
  }

  await run(
    {
      language: args[THIRD_ARGUMENT] || 'en',
    },
    threads,
    repeats,
  );
};
