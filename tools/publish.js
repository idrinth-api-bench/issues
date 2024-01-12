import {
  execSync,
} from 'child_process';
import readline from 'readline';
import { existsSync, readFileSync, writeFileSync } from 'fs';

const exec = (command, passthrough=false,) => {
  // eslint-disable-next-line no-console
  console.log(command,);
  const result = execSync(command, passthrough ? {
    stdio: 'inherit',
  } : {},) + '';
  if (!passthrough) {
    console.log(result);
  }
  return result;
};

const EXIT_FAILURE = 1;
const EXIT_SUCCESS = 0;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
},);
rl.question(
  'Enter version to publish',
  (version,) => {
    if (!version.match(/^\d+\.\d+\.\d+$/)) {
      // eslint-disable-next-line no-console
      console.error('Invalid version.');
      process.exit(EXIT_FAILURE,);
    }
    for (const file of ['/package.json', '/framework/package.json', '/website/package.json']) {
      if (!existsSync(process.cwd() + file)) {
        console.error('File ' + file + ' missing');
        process.exit(EXIT_FAILURE,);
      }
      writeFileSync(process.cwd() + file, readFileSync(process.cwd() + file, 'utf8').replace(/"version": "\d+\.\d+\.\d+",/u, `"version": "${ version }",`));
    }
    exec(
      'npm install',
      true,
    );
    exec(
      'cd framework && npm install',
      true,
    );
    exec(
      'cd website && npm install',
      true,
    );
    exec(
      'cd framework && npm publish',
      true,
    );
    process.exit(EXIT_SUCCESS,);
  },
);
