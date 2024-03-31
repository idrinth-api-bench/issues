#!/usr/bin/env node
import cli from '../src/cli/cli.js';

process.exit(await cli(process.argv, process.cwd(),),);
