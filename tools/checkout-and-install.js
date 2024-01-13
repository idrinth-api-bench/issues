import exec from './src/exec.js';
import readline from 'readline';
import {
  ARRAY_FIRST,
  ARRAY_SECOND,
  EXIT_SUCCESS,
  FIRST_ARGUMENT,
} from './src/constants.js';

if (! process.argv[FIRST_ARGUMENT]) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  },);
  rl.question(
    'username:branch missing, what do you want to checkout?',
    (userbranch,) => {
      exec(
        'node '+process.cwd()+'/tools/checkout-and-install.js '+userbranch,
        true,
      );
      process.exit(EXIT_SUCCESS,);
    },
  );
} else {
  const user = process.argv[FIRST_ARGUMENT].includes(':',)
    ? process.argv[FIRST_ARGUMENT].split(':',)[ARRAY_FIRST]
    : 'idrinth';
  const branch = process.argv[FIRST_ARGUMENT].includes(':',)
    ? process.argv[FIRST_ARGUMENT].split(':',)[ARRAY_SECOND]
    : process.argv[FIRST_ARGUMENT];

  const remotes = exec('git remote',);
  if (! remotes.includes(user,)) {
    exec(
      `git remote add ${ user } https://github.com/${ user }/api-bench`,
      true,
    );
  }
  exec(`git fetch ${ user }`, true,);
  exec(
    `git checkout -B ${ user }-${ branch } --track ${ user }/${ branch }`,
    true,
  );
  exec('git pull', true,);
  exec('npm install', true,);
  exec('cd framework && npm install', true,);
  exec('cd website && npm install', true,);
  exec('cd website && npm run build', true,);
}
