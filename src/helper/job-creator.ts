import Job from '../job';
import * as reqlib from 'app-root-path';
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

export default (): Job => {
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
    const snaked = snakeCase(type,);
    if (existsSync(reqlib + '/src/routes/'+snaked,)) {
      for (const file of readdirSync(reqlib + '/src/routes/'+snaked,)) {
        if (file.match(/\.js|\.ts|\.json/u,)) {
          job[type].push(include(reqlib + '/src/routes/'+snaked+'/'+file,),);
        }
      }
    }
  }
  return job;
};
