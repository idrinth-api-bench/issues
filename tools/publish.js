import exec from './src/exec.js';
import readline from 'readline';
import {
  existsSync,
  readFileSync,
  writeFileSync,
} from 'fs';
import {
  EXIT_FAILURE,
  EXIT_SUCCESS,
  INDENTATION,
} from './src/constants.js';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
},);
rl.question(
  'Enter version to publish',
  (version,) => {
    if (! version.match(/^\d+\.\d+\.\d+$/u,)) {
      console.error('Invalid version.',);
      process.exit(EXIT_FAILURE,);
    }
    for (const file of [
      '/package.json',
      '/framework/package.json',
      '/documentation-website/package.json',
      '/history-website/package.json',
      '/history-microservice/package.json',
    ]) {
      if (! existsSync(process.cwd() + file,)) {
        console.error('File ' + file + ' missing',);
        process.exit(EXIT_FAILURE,);
      }
      const data = JSON.parse(readFileSync(
        process.cwd() + file,
        'utf8',
      ),);
      data.version = version;
      writeFileSync(
        process.cwd() + file,
        // eslint-disable-next-line no-undefined
        JSON.stringify(data, undefined, INDENTATION,),
      );
    }
    exec(
      'npm install',
      true,
    );
    exec(
      'cd framework && npm install',
      true,
    );
    writeFileSync(
      process.cwd() + '/framework/LICENSE',
      readFileSync(process.cwd() + '/LICENSE', 'utf8',),
    );
    exec(
      'cd framework && npm publish',
      true,
    );
    process.exit(EXIT_SUCCESS,);
  },
);
