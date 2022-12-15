import Job from '../job';
import * as reqlib from 'app-root-path';
import {
  readdirSync, existsSync,
} from 'fs';
import {
 snakeCase, } from 'snake-case';
import {
analyze
} from './function-analyzer';

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
  for (const type in Object.keys(job,)) {
    const snaked = snakeCase(type,);
    if (existsSync(reqlib + '/src/routes/'+snaked,)) {
      for (const file in readdirSync(reqlib + '/src/routes/'+snaked,)) {
        if (file.match(/\.js|\.ts|\.json/u,)) {
          // eslint-disable-next-line @typescript-eslint/no-var-requires
          const val = require(reqlib + '/src/routes/'+snaked+'/'+file,);
          if (typeof val === 'function') {
            const parameters = analyze(val,);
            job[type].push(val.call(this, ...parameters.map(x => x.value,)),);
          } else {
            job[type].push(val,);
          }
        }
      }
    }
  }
  return job;
};
