import {
  readFileSync,
  writeFileSync,
} from 'fs';
import pkg from '../package.json' with {
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
    main: 'index.js',
    type: 'commonjs',
    private: true,
    scripts: {
      start: 'electron-forge start',
      make: 'electron-forge make',
      package: 'electron-forge package',
    },
    dependencies: {
      'electron-compile': pkg.dependencies['electron-compile'],
      'electron-squirrel-startup': pkg.dependencies['electron-squirrel-startup'],
    },
    devDependencies: {
      electron: pkg.dependencies.electron,
      '@electron-forge/cli': pkg.devDependencies['@electron-forge/cli'],
      'electron-prebuilt-compile': pkg.devDependencies['electron-prebuilt-compile'],
    },
    config: {
      forge: pkg.config.forge,
    },
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
