import {
  execSync,
} from 'child_process';
import readline from 'readline';

const exec = (command, passthrough=false,) => {
  // eslint-disable-next-line no-console
  console.log(command,);
  return execSync(command, passthrough ? {
    stdio: 'inherit',
  } : {},);
};

const FIRST_ARGUMENT = 2;
const ARRAY_FIRST = 0;
const ARRAY_SECOND = 1;
const EXIT_SUCCESS = 0;

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

  const remotes = exec('git remote',) + '';
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
  exec('cd website && npm install', true,);
  exec('cd website && npm run build', true,);
}
