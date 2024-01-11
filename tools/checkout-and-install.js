import {
  execSync,
} from 'child_process';
import readline from 'readline';

const exec = (command, passthrough=false) => {
  console.log(command);
  return execSync(command, passthrough ? {stdio: 'inherit'} : {});
};

if (!process.argv[2]) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })
  rl.question('username:branch missing, what do you want to checkout?', (userbranch) => {
    exec('node '+process.cwd()+'/tools/checkout-and-install.js '+userbranch, true);
    process.exit(0);
  });
} else {
  const user = process.argv[2].includes(':') ? process.argv[2].split(':')[0] : 'idrinth';
  const branch = process.argv[2].includes(':') ? process.argv[2].split(':')[1] : process.argv[2];

  const remotes = exec(`git remote`) + '';
  if (!remotes.includes(user)) {
    exec(`git remote add ${user} https://github.com/${user}/api-bench`, true);
  }
  exec(`git fetch ${user}`, true);
  exec(`git checkout -B ${user}-${branch} --track ${user}/${branch}`, true);
  exec(`git pull`, true);
  exec('npm install', true);
  exec('cd website && npm install', true);
  exec('cd website && npm run build', true);
}
