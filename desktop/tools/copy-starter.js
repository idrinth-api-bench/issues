import {
  readFileSync,
  writeFileSync,
} from 'fs';
import pkg from '../package.json' with {
  type: 'json'
};
import pkgTemplate from '../dist/package.json' with {
  type: 'json'
};
import {
  execSync,
} from 'child_process';

writeFileSync(
  './dist/index.js',
  readFileSync('./index.cjs', 'utf8',),
  'utf8',
);
writeFileSync(
  './dist/run.js',
  readFileSync('./run.cjs', 'utf8',),
  'utf8',
);
writeFileSync(
  './dist/package.json',
  JSON.stringify({
    name: pkg.name,
    version: pkg.version,
    description: pkg.description,
    ...pkgTemplate,
  },),
  'utf8',
);
execSync(
  'npm install',
  {
    cwd: process.cwd() + '/dist',
    stdio: 'inherit',
  },
);
