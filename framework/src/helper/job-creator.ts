import Job from '../job.js';
import {
  readdirSync, existsSync,
} from 'fs';
import {
  snakeCase,
} from 'change-case';
import {
  Task,
} from '../task.js';
import include from './include-default.js';
import taskTypes from '../task-types.js';

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
  for (const type of taskTypes) {
    const dir = root + '/src/routes/' + snakeCase(type,);
    if (existsSync(dir,)) {
      for (const file of readdirSync(dir,)) {
        if (file.match(/\.c?js|\.json/u,)) {
          // eslint-disable-next-line no-await-in-loop
          job[type].push((await include(dir + '/' + file,)) as Task,);
        }
      }
    }
  }
  return job;
};
