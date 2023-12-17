#!/usr/bin/env node
import {
  run,
} from '../src/main.js';

const FIRST_ARGUMENT = 2;
const SECOND_ARGUMENT = 3;
const THIRD_ARGUMENT = 4;
const BASE_10_RADIX = 10;

const threads = Number.parseInt(
  process.argv[FIRST_ARGUMENT] || '1',
  BASE_10_RADIX,
);
const repeats = Number.parseInt(
  process.argv[SECOND_ARGUMENT] || '1',
  BASE_10_RADIX,
);

run(
  {
    language: process.argv[THIRD_ARGUMENT] || 'en',
  },
  threads,
  repeats,
);
