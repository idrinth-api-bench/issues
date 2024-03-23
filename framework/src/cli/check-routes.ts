/* eslint no-console: 0 */
import jobCreator from '../helper/job-creator.js';
import language, {
  locale,
} from '../helper/language.js';
import {
  DEFAULT_LANGUAGE,
  ONE,
  EMPTY,
  FIRST_ARGUMENT,
} from '../constants.js';
import validateTasks from '../validate-tasks.js';
import taskTypes from '../task-types.js';
import {
  Task,
} from '../task.js';
import Job from '../job.js';
import taskType from '../task-type.js';

// eslint-disable-next-line complexity
const checkMiddleware = (type: 'pre'|'post', route: Task,) => {
  if (typeof route[type] === 'undefined') {
    return true;
  }
  const data = route[type];
  delete route[type];
  if (typeof data !== 'object' || ! Array.isArray(data,)) {
    console.error(language(`invalid_${ type }_definition`, route.id,),);
    return false;
  }
  for (const middleware of data) {
    if (typeof middleware !== 'string') {
      console.error(language(`invalid_${ type }_definition`, route.id,),);
      return false;
    }
  }
  return true;
};

// eslint-disable-next-line complexity
const checkType = (job: Job, type: taskType,) => {
  if (typeof job[type] === 'undefined') {
    return {
      errors: 0,
      warnings: 0,
    };
  }
  let errors = 0;
  let warnings = 0;
  if (job[type].length > EMPTY) {
    for (const route of job[type]) {
      if (! checkMiddleware('pre', route,)) {
        errors ++;
      }
      if (! checkMiddleware('post', route,)) {
        errors ++;
      }
      const id = route.id;
      delete route.id;
      delete route.main;
      for (const key of Object.keys(route,)) {
        console.warn(language('unknown_route_property', key, id,),);
        warnings ++;
      }
    }
  }
  return {
    errors,
    warnings,
  };
};

export default async(args: string[], cwd: string): Promise<void> => {
  await locale(args[FIRST_ARGUMENT] || DEFAULT_LANGUAGE,);
  const job = await jobCreator(cwd,);
  validateTasks(ONE, ONE, job.main,);
  let errors = 0;
  let warnings = 0;
  for (const type of taskTypes) {
    const result = checkType(job, type,);
    errors += result.errors;
    warnings += result.warnings;
  }
  if (errors > EMPTY) {
    console.error(language('validation_errors', `${ errors }`,),);
  }
  if (warnings > EMPTY) {
    console.error(language('validation_warnings', `${ warnings }`,),);
  }
};
