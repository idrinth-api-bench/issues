import {
  mkdirSync,
  existsSync,
  writeFileSync,
  cpSync as copySync,
} from 'fs';
import {
  FIRST_ARGUMENT,
  FRAMEWORK_ROOT,
  INDENTATION_SPACES,
} from './constants.js';
import language from './helper/language.js';
import {
  exec,
} from 'child_process';

export default (args: string[], cwd: string,) => {
  const name = args[FIRST_ARGUMENT] || 'benchmark';
  const root = cwd + '/' + name;
  if (existsSync(root,)) {
    throw new Error(language('already_created',),);
  }
  mkdirSync(root,);
  mkdirSync(root + '/src',);
  mkdirSync(root + '/test',);
  mkdirSync(root + '/src/routes',);
  mkdirSync(root + '/src/routes/main',);
  mkdirSync(root + '/src/routes/before',);
  writeFileSync(root + '/package.json', JSON.stringify({
    name,
    private: true,
    type: 'module',
    dependencies: {
      '@idrinth/api-bench': '^2.4.5',
    },
    devDependencies: {
      typescript: '^2.4.5',
      mocha: '*',
      chai: '',
      'ts-node': '',
      c8: '',
    },
    scripts: {
      start: 'tsc -p tsconfig.json && run-benchmark',
      test: 'c8 mocha test',
      lint: 'eslint . --ext .js,.ts,.cjs,.json',
      'lint-fix': 'eslint --fix . --ext .js,.ts,.cjs,.json',
    },
  }, null, INDENTATION_SPACES,),);
  writeFileSync(root + '/tsconfig.json', JSON.stringify({
    compilerOptions: {
      experimentalDecorators: true,
      module: 'NodeNext',
      lib: [],
      target: 'ESNext',
      esModuleInterop: true,
      moduleResolution: 'NodeNext',
      resolveJsonModule: true,
    },
    typeRoots: [ '@types', ],
    include: [ 'src/**/*.ts', ],
    'ts-node': {
      transpileOnly: true,
      moduleTypes: {
        '*.ts': 'cjs',
      },
    },
  }, null, INDENTATION_SPACES,),);
  writeFileSync(root + '/.gitignore', '/nbproject\n' +
    '/node_modules\n' +
    '/result.json\n' +
    '/result.csv\n' +
    '/result.html\n' +
    '/src/**/*.js\n' +
    '/.idea\n',);
  copySync(FRAMEWORK_ROOT + '/.editorconfig', root + '/.editorconfig',);
  copySync(FRAMEWORK_ROOT + '/.eslintrc.yml', root + '/.eslintrc.yml',);
  copySync(FRAMEWORK_ROOT + '/.mocharc.cjs', root + '/.mocharc.cjs',);
  copySync(FRAMEWORK_ROOT + '/.nycrc.json', root + '/.nycrc.json',);
  exec('npm install', {
    cwd: root,
  },);
  exec('git init', {
    cwd: root,
  },);
};
