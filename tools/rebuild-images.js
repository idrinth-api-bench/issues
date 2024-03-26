import {
  rmSync,
  writeFileSync,
} from 'fs';
import exec from './src/exec.js';
import readline from 'readline';
import {
  EXIT_SUCCESS,
} from './src/constants.js';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
},);
rl.question('Versions(space separated): ', (versions,) => {
  rl.question('Docker password: ', (password,) => {
    writeFileSync('./pw', password,);
    exec('cat pw | docker login -u idrinth --password-stdin', true,);
    rmSync('./pw',);
    for (const image of [
      'api-bench-build',
      'api-bench',
      'api-bench-gitea-action',
      'api-bench-gitlab-runner',
    ]) {
      for (const version of versions.split(' ')) {
        if (version && version.match(/^[0-9]+\.[0-9]+\.[0-9]+$/u)) {
          const main = version.replace(/\..+$/u, '',);
          const feature = version.replace(/\.[^.]+$/u, '',);
          const args = [
            `--build-arg="BUILD_VERSION=${ version }"`,
            `--build-arg="BUILD_TIME=${ new Date().toISOString() }"`,
            `--build-arg="BUILD_HASH=${ exec('git rev-parse --short HEAD',) }"`,
          ];
          const tags = [
            `-t idrinth/${ image }:latest`,
            `-t idrinth/${ image }:${ version }`,
            `-t idrinth/${ image }:${ feature }`,
            `-t idrinth/${ image }:${ main }`,
          ];
          const params = [
            ...args,
            ...tags,
          ];
          exec(
            `cd containers/${ image } && docker build ${ params.join(' ',) } .`,
            true,
          );
        }
      }
      exec(`docker push -a idrinth/${ image }`, true,);
    }
    process.emit(EXIT_SUCCESS,);
  },);
},);
