#!/usr/bin/env node
import {cli, run} from '../src/cli/bench.js';

cli(process.argv,);

const args = process.argv.slice(2);
const filterId = args.find(arg => arg.startsWith('--filterId='));
const filterIdValue = filterId ? filterId.split('=')[1] : null;

await run({taskId: filterIdValue});