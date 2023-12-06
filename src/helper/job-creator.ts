import Job from '../job.js';
import {
  readdirSync, existsSync,
} from 'fs';
import {
  snakeCase,
} from 'change-case';
import {
  analyze,
} from './function-analyzer.js';
import {
  Task,
} from '../task.js';

const TYPES = [
  'before',
  'beforeTask',
  'beforeEach',
  'main',
  'afterEach',
  'afterTask',
  'after',
];

const include = async(path: string,): Promise<Task> => {
  const val = await import(path,);
  if (typeof val === 'function') {
    const parameters = analyze(val,);
    return val(...parameters.map((x,) => x.value,),);
  }
  return val as Task;
};

export default async(root: string,): Promise<Job> => {
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
          // eslint-disable-next-line no-await-in-loop
          job[type].push(await include(dir + '/' + file,),);
        }
      }
    }
  }
  return job;
};
