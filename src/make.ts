import {
  mkdirSync,
  existsSync,
  writeFileSync,
} from 'fs';
import {
  FIRST_ARGUMENT,
} from './constants.js';
import language from './helper/language.js';
import {
  spawn,
} from 'child_process';

export default async(args: string[], cwd: string,) => {
  const name = args[FIRST_ARGUMENT] || 'benchmark';

  if (existsSync(cwd + '/' + name,)) {
    throw new Error(language('already_created',),);
  }
  mkdirSync(cwd + '/' + name,);
  mkdirSync(cwd + '/' + name + '/src',);
  mkdirSync(cwd + '/' + name + '/src/routes',);
  mkdirSync(cwd + '/' + name + '/src/routes/main',);
  mkdirSync(cwd + '/' + name + '/src/routes/before',);
  writeFileSync(cwd + '/' + name + '/package.json', JSON.stringify({
    name,
    private: true,
    dependencies: {
      '@idrinth/api-bench': '^2.4.5',
    },
    scripts: {
      start: 'run-benchmark',
    },
  },),);
  spawn('npm install', {
    cwd: cwd + '/' + name,
  },);
};
