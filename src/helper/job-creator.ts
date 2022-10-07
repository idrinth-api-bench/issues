import Job from '../job';
import * as reqlib from 'app-root-path';
import {
  readdirSync, existsSync,
} from 'fs';

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
    if (existsSync(reqlib + '/src/routes/'+type,)) {
      for (const file in readdirSync(reqlib + '/src/routes/'+type,)) {
        if (file.match(/\.js|\.ts|\.json/,)) {
          job[type].push(require(reqlib + '/src/routes/'+type+'/'+file,),);
        }
      }
    }
  }
  return job;
};
