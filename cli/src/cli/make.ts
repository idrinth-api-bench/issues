import {
  mkdirSync,
  existsSync,
  writeFileSync,
} from 'fs';
import {
  EMPTY,
  FIRST_ARGUMENT,
  INDENTATION_SPACES,
} from '../constants.js';
import language from '../helper/language.js';
import {
  execSync,
} from 'child_process';
import {
  SingleBar,
} from 'cli-progress';
import pkg from '../../package.json' with {
  type: 'json'
};

export default (args: string[], cwd: string,) => {
  const name = (args[FIRST_ARGUMENT] || 'benchmark')
    .toLowerCase()
    .replace(/[^a-z0-9_-]+/ug, '-',)
    .replace(/^[_-]+|[_-]+$/ug, '',);
  if (name === '') {
    throw new Error(language('name_invalid',),);
  }
  const root = cwd + '/' + name;
  if (existsSync(root,)) {
    throw new Error(language('already_created',),);
  }
  const bar = new SingleBar({
    stopOnComplete: true,
    format: 'progress [{bar}] {value}/{total} {task}',
  },);
  bar.update({
    task: '',
  },);
  const mkdir = (path: string,) => {
    bar.update({
      task: `Creating ${ path }`,
    },);
    mkdirSync(root + path,);
  };
  const write = (path: string, data: string,) => {
    bar.update({
      task: `Creating ${ path }`,
    },);
    writeFileSync(root + path, data, 'utf8',);
  };
  const exec = (command: string,) => {
    bar.update({
      task: `executing '${ command }'`,
    },);
    execSync(command, {
      cwd: root,
    },);
  };
  const tasks = [
    () => mkdir('',),
    () => mkdir('/src',),
    () => mkdir('/test',),
    () => mkdir('/src/routes',),
    () => mkdir('/src/routes/main',),
    () => mkdir('/src/routes/before',),
    () => write('/package.json', JSON.stringify({
      name,
      private: true,
      type: 'module',
      dependencies: {
        '@idrinth/api-bench': '^' + pkg.version,
      },
      devDependencies: {
        typescript: '^5.3.3',
        mocha: '^10.2.0',
        chai: '^4.3.10',
        'ts-node': '^10.9.1',
        c8: '^8.0.1',
        eslint: '^8.55.0',
        'eslint-plugin-json': '^3.1.0',
        '@typescript-eslint/eslint-plugin': '^7.0.0',
        '@typescript-eslint/parser': '^7.0.0',
      },
      scripts: {
        start: 'tsc -p tsconfig.json && run-benchmark',
        test: 'c8 mocha test',
        lint: 'eslint . --ext .js,.ts,.cjs,.json',
        'lint-fix': 'eslint --fix . --ext .js,.ts,.cjs,.json',
      },
    }, null, INDENTATION_SPACES,),),
    () => writeFileSync(root + '/tsconfig.json', JSON.stringify({
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
    }, null, INDENTATION_SPACES,),),
    () => write('/.idrinth-api-bench.yml', 'benchmarking: []\n' +
      'load-testing: []\n' +
      'content-testing: []\n',),
    () => write('/.gitignore', '/nbproject\n' +
      '/node_modules\n' +
      '/result.*\n' +
      '/src/**/*.js\n' +
      '/.idea\n' +
      '/.vscode\n',),
    () => write('/.eslintrc.yml', 'extends:\n' +
      '- eslint:recommended\n' +
      '- "plugin:json/recommended"\n' +
      '- "plugin:@typescript-eslint/recommended"\n' +
      'env:\n' +
      '  node: true\n' +
      'plugins:\n' +
      '- json\n' +
      'ignorePatterns:\n' +
      '- node_modules\n' +
      'root: true\n' +
      'parser: "@typescript-eslint/parser"\n' +
      'rules:\n' +
      '  no-await-in-loop: error\n' +
      '  no-extra-parens: warn\n' +
      '  no-template-curly-in-string: error\n' +
      '  class-methods-use-this: error\n' +
      '  complexity:\n' +
      '  - error\n' +
      '  - 5\n' +
      '  consistent-return: warn\n' +
      '  curly: error\n' +
      '  dot-notation: warn\n' +
      '  eqeqeq: error\n' +
      '  guard-for-in: error\n' +
      '  no-alert: error\n' +
      '  no-caller: error\n' +
      '  no-eval: error\n' +
      '  no-extend-native: error\n' +
      '  no-extra-bind: warn\n' +
      '  no-extra-label: warn\n' +
      '  no-invalid-this: error\n' +
      '  no-magic-numbers: warn\n' +
      '  no-multi-spaces: warn\n' +
      '  no-new-wrappers: error\n' +
      '  no-new: error\n' +
      '  no-console: warn\n' +
      '  no-proto: error\n' +
      '  no-return-await: error\n' +
      '  no-self-compare: error\n' +
      '  no-sequences: error\n' +
      '  no-throw-literal: error\n' +
      '  no-unused-expressions: warn\n' +
      '  no-useless-call: warn\n' +
      '  no-useless-return: warn\n' +
      '  radix: error\n' +
      '  require-await: error\n' +
      '  require-unicode-regexp: error\n' +
      '  wrap-iife:\n' +
      '  - error\n' +
      '  - inside\n' +
      '  no-shadow: error\n' +
      '  no-label-var: error\n' +
      '  no-undef-init: error\n' +
      '  no-undefined: error\n' +
      '  no-use-before-define: error\n' +
      '  func-call-spacing:\n' +
      '  - warn\n' +
      '  - never\n' +
      '  func-names:\n' +
      '  - error\n' +
      '  - never\n' +
      '  func-style:\n' +
      '  - warn\n' +
      '  - expression\n' +
      '  function-call-argument-newline:\n' +
      '  - error\n' +
      '  - consistent\n' +
      '  implicit-arrow-linebreak:\n' +
      '  - warn\n' +
      '  - beside\n' +
      '  indent:\n' +
      '  - warn\n' +
      '  - 2\n' +
      '  - SwitchCase: 1\n' +
      '  key-spacing: warn\n' +
      '  keyword-spacing: warn\n' +
      '  lines-between-class-members:\n' +
      '  - warn\n' +
      '  - always\n' +
      '  max-depth: warn\n' +
      '  max-len:\n' +
      '  - warn\n' +
      '  - code: 80\n' +
      '  ignorePattern: eslint\n' +
      '  max-params: warn\n' +
      '  newline-per-chained-call: warn\n' +
      '  new-parens: error\n' +
      '  no-array-constructor: error\n' +
      '  no-continue: error\n' +
      '  no-lonely-if: error\n' +
      '  no-multi-assign: error\n' +
      '  no-multiple-empty-lines:\n' +
      '  - warn\n' +
      '  - max: 1\n' +
      '  no-nested-ternary: error\n' +
      '  no-new-object: error\n' +
      '  no-tabs: warn\n' +
      '  no-trailing-spaces: warn\n' +
      '  no-unneeded-ternary: error\n' +
      '  no-whitespace-before-property: warn\n' +
      '  object-curly-newline:\n' +
      '  - warn\n' +
      '  - multiline: true\n' +
      '  minProperties: 1\n' +
      '  object-curly-spacing:\n' +
      '  - warn\n' +
      '  - always\n' +
      '  object-property-newline: warn\n' +
      '  one-var-declaration-per-line:\n' +
      '  - error\n' +
      '  - always\n' +
      '  quotes:\n' +
      '  - warn\n' +
      '  - single\n' +
      '  semi: error\n' +
      '  semi-spacing: warn\n' +
      '  semi-style:\n' +
      '  - error\n' +
      '  - last\n' +
      '  space-unary-ops:\n' +
      '  - warn\n' +
      '  - words: true\n' +
      '  nonwords: true\n' +
      '  space-before-function-paren:\n' +
      '  - warn\n' +
      '  - never\n' +
      '  space-before-blocks:\n' +
      '  - warn\n' +
      '  - always\n' +
      '  switch-colon-spacing:\n' +
      '  - warn\n' +
      '  - after: true\n' +
      '    before: false\n' +
      '  template-tag-spacing:\n' +
      '  - warn\n' +
      '  - always\n' +
      '  eol-last:\n' +
      '  - warn\n' +
      '  - always\n' +
      '  computed-property-spacing:\n' +
      '  - warn\n' +
      '  - never\n' +
      '  comma-style:\n' +
      '  - warn\n' +
      '  - last\n' +
      '  comma-spacing: warn\n' +
      '  comma-dangle:\n' +
      '  - warn\n' +
      '  - always\n' +
      '  block-spacing:\n' +
      '  - warn\n' +
      '  - always\n' +
      '  array-element-newline: warn\n' +
      '  brace-style: warn\n' +
      '  array-bracket-spacing:\n' +
      '  - warn\n' +
      '  - never\n' +
      '  - singleValue: true\n' +
      '  array-bracket-newline:\n' +
      '  - warn\n' +
      '  - minItems: 2\n' +
      '  prefer-rest-params: warn\n' +
      '  template-curly-spacing:\n' +
      '  - warn\n' +
      '  - always\n' +
      '   prefer-const: error\n' +
      '  no-var: error\n' +
      '   no-useless-constructor: warn\n' +
      '   no-useless-computed-key: warn\n' +
      '  no-confusing-arrow: warn\n' +
      '  arrow-spacing: warn\n' +
      '  arrow-body-style:\n' +
      '  - warn\n' +
      '  - as-needed\n' +
      'parserOptions:\n' +
      '  ecmaVersion: 2018\n'
      ,),
    () => write('/test/.eslintrc.yml', 'env:\n' +
      '  mocha: true\n'
      ,),
    () => write(
      '/.editorconfig',
      'root = true\n' +
      '\n' +
      '[*]\n' +
      'end_of_line = lf\n' +
      'insert_final_newline = true\n' +
      'charset = utf-8\n' +
      'indent_style = space\n' +
      'indent_size = 2\n',
    ),
    () => write(
      '/.mocharc.cjs',
      'module.exports = {\n' +
      '  recursive: true,\n' +
      '  extension: [\n' +
      '    \'ts\'\n' +
      '  ],\n' +
      '  \'node-option\': [\n' +
      '    \'experimental-specifier-resolution=node\',\n' +
      '    \'loader=ts-node/esm\'\n' +
      '  ],\n' +
      '  parallel: false\n' +
      '}',
    ),
    () => write(
      '/.nycrc.json',
      '{\n' +
      '  "require": ["ts-node/register"],\n' +
      '  "extension" : [".ts", ".tsx"],\n' +
      '  "reporter": ["lcov", "text-summary"],\n' +
      '  "all": true,\n' +
      '  "sourceMap": true,\n' +
      '  "instrument": true,\n' +
      '  "exclude": [],\n' +
      '  "include": ["src/**/*.ts"]\n' +
      '}\n',
    ),
    () => exec('npm install',),
    () => exec('git init --initial-branch=master',),
  ];
  bar.start(tasks.length, EMPTY,);
  for (const task of tasks) {
    task();
    bar.update({
      task: '',
    },);
    bar.increment();
  }
};
