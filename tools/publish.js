import exec from './src/exec.js';
import readline from 'readline';
import {
  quote,
} from 'shell-quote';
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

const delay = (time,) => new Promise((resolve,) => setTimeout(resolve, time,),);
const NPM_PULL_DELAY = 30000;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
},);
rl.question(
  'Enter version to publish: ',
  async(version,) => {
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
    await delay(NPM_PULL_DELAY,);
    const main = version.replace(/\..+$/u, '',);
    const feature = version.replace(/\.[^.]+$/u, '',);
    rl.question('Docker password: ', (password,) => {
      exec(quote([
        'docker',
        'login',
        '-u',
        'idrinth',
        '-p',
        password,
      ],), true,);
      for (const image of [
        'api-bench',
        'api-bench-gitea-action',
        'api-bench-api-bench-gitlab-runner',
      ]) {
        const tags = [
          `-t idrinth/${ image }:latest`,
          `-t idrinth/${ image }:${ version }`,
          `-t idrinth/${ image }:${ feature }`,
          `-t idrinth/${ image }:${ main }`,
        ];
        writeFileSync(
          `${ process.cwd() }/containers/${ image }/Dockerfile`,
          readFileSync(
            `${ process.cwd() }/containers/${ image }/Dockerfile`,
            'utf8',
          )
            .replace(
              'ARG IDRINTH_API_BENCH_VERSION',
              `ARG IDRINTH_API_BENCH_VERSION=${ version }`,
            ),
        );
        exec(
          `cd containers/${ image } && docker build ${ tags.join(' ',) } .`,
          true,
        );
        exec(`docker push -a ${ image }`, true,);
      }
      process.exit(EXIT_SUCCESS,);
    },);
  },
);
