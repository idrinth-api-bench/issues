import { run } from '../src/main.js';

const threads = Number.parseInt(process.argv[2] || '1', 10);
const repeats = Number.parseInt(process.argv[3] || '1', 10);

run({}, threads, repeats);