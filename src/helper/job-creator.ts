import Job from '../job';
import {
  readdirSync, existsSync,
} from 'fs';
import {
  snakeCase,
} from 'snake-case';
import {
  analyze,
} from './function-analyzer';
import {
  Task,
} from '../task';

const TYPES = [
  'before',
  'beforeTask',
  'beforeEach',
  'main',
  'afterEach',
  'afterTask',
  'after',
];

const include = (path: string,): Task => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const val = require(path,);
  if (typeof val === 'function') {
    const parameters = analyze(val,);
    return val(...parameters.map((x,) => x.value,),);
  }
  return val;
};

export default (root: string,): Job => {
  const job:Job = {
    before: [],
    beforeTask: [],
    beforeEach: [],
    main: [],
    afterEach: [],
    afterTask: [],
    after: [],
  };
  for (const type of TYPES) {
    const dir = root + '/src/routes/' + snakeCase(type,);
    if (existsSync(dir,)) {
      for (const file of readdirSync(dir,)) {
        if (file.match(/\.js|\.ts|\.json/u,)) {
          job[type].push(include(dir + '/' + file,),);
        }
      }
    }
  }
  return job;
};
