import exec from './src/exec.js';
import readline from 'readline';
import {
  existsSync,
  readFileSync,
  rmSync,
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
const question = (text,) => new Promise(
  (resolve,) => rl.question(text, resolve,),
);
const version = process.env.VERSION_TO_RELEASE
  ?? await question('Enter version to publish: ',);
const npmPassword = process.env.NPM_TOKEN
  ?? await question('NPM password: ',);
const dockerPassword = process.env.DOCKER_PASSWORD
  ?? await question('Docker password: ',);
if (! version.match(/^\d+\.\d+\.\d+$/u,)) {
  console.error('Invalid version.',);
  process.exit(EXIT_FAILURE,);
}
if (! dockerPassword) {
  console.error('DockerHub password missing.',);
  process.exit(EXIT_FAILURE,);
}
if (! npmPassword) {
  console.error('NPM password missing.',);
  process.exit(EXIT_FAILURE,);
}
for (const file of [
  '/package.json',
  '/framework/package.json',
  '/documentation-website/package.json',
  '/history-website/package.json',
  '/history-microservice/package.json',
  '/mindmap/package.json',
  '/cli/package.json',
  '/desktop/package.json',
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
const data = JSON.parse(readFileSync(
  process.cwd() + '/framework/package.json',
  'utf8',
),);
data.dependencies['@idrinth-api-bench/api-bench-cli'] = '^' + version;
writeFileSync(
  process.cwd() + '/framework/package.json',
  // eslint-disable-next-line no-undefined
  JSON.stringify(data, undefined, INDENTATION,),
);
exec(
  'npm install',
  true,
);
exec(
  'cd cli && npm install',
  true,
);
writeFileSync(
  process.cwd() + '/cli/LICENSE',
  readFileSync(process.cwd() + '/LICENSE', 'utf8',),
);
writeFileSync(
  process.cwd() + '/framework/LICENSE',
  readFileSync(process.cwd() + '/LICENSE', 'utf8',),
);
exec('git add .',);
exec(`git commit -m "release ${ version }"`,);
exec('git push || true',);
if (npmPassword.match(/^npm_/u,)) {
  writeFileSync(
    '~/.npmrc',
    '//registry.npmjs.org/:_authToken=' + npmPassword,
    'utf8',
  );
} else {
  exec('npm logout || true', true,);
  exec(
    'npm adduser <<!\n' +
    'idrinth\n' +
    npmPassword + '\n' +
    'webmaster@idrinth.de\n' +
    '!',
    true,
    'npm add user',
  );
}
exec(
  'cd cli && npm publish',
  true,
);
exec(
  'cd framework && npm install && npm publish',
  true,
);
await delay(NPM_PULL_DELAY,);
const main = version.replace(/\..+$/u, '',);
const feature = version.replace(/\.[^.]+$/u, '',);
writeFileSync('./pw', dockerPassword,);
exec('cat pw | docker login -u idrinth --password-stdin', true,);
rmSync('./pw',);
const args = [
  `--build-arg="BUILD_VERSION=${ version }"`,
  `--build-arg="BUILD_TIME=${ new Date().toISOString() }"`,
  `--build-arg="BUILD_HASH=${ exec('git rev-parse --short HEAD',) }"`,
];
for (const image of [
  'api-bench-build',
  'api-bench',
  'api-bench-gitea-action',
  'api-bench-gitlab-runner',
]) {
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
  exec(`docker push -a idrinth/${ image }`, true,);
}
exec('docker image prune --force', true,);
process.exit(EXIT_SUCCESS,);
