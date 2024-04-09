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
import Task from '../task.js';
import Job from '../job.js';
import taskType from '../task-type.js';
import Request from '../request.js';
import logSymbols from 'log-symbols';
import languageKey from '../locales/language-key.js';

const warn = (key: languageKey, ...argList: string[]) => {
  console.warn(logSymbols.warning + ' ' + language(key, ...argList,),);
};
const error = (key: languageKey, ...argList: string[]) => {
  console.error(logSymbols.error + ' ' + language(key, ...argList,),);
};

// eslint-disable-next-line complexity
const checkMiddleware = (type: 'pre'|'post', route: Task,) => {
  if (typeof route[type] === 'undefined') {
    return true;
  }
  const data = route[type];
  delete route[type];
  if (typeof data !== 'object' || ! Array.isArray(data,)) {
    error(`invalid_${ type }_definition`, route.id,);
    return false;
  }
  for (const middleware of data) {
    if (typeof middleware !== 'string') {
      error(`invalid_${ type }_definition`, route.id,);
      return false;
    }
  }
  return true;
};

// eslint-disable-next-line complexity
const checkRequest = (main: Request, id: string,): {
  invalid: boolean,
  risky: boolean,
} => {
  const properties = [
    {
      name: 'method',
      type: 'string',
      required: true,
    },
    {
      name: 'headers',
      type: 'object',
      required: false,
    },
    {
      name: 'cookies',
      type: 'object',
      required: false,
    },
    {
      name: 'body',
      type: [
        'string',
        'object',
      ],
      required: false,
    },
    {
      name: 'autohandle',
      type: 'string',
      required: false,
    },
    {
      name: 'url',
      type: 'string',
      required: true,
    },
    {
      name: 'maxDuration',
      type: 'number',
      required: false,
    },
  ];
  let valid = true;
  for (const property of properties) {
    if (property.required && typeof main[property.name] === 'undefined') {
      error('invalid_request_property', id, property.name,);
      valid = false;
    } else if (typeof main[property.name] !== property.type) {
      error('invalid_request_property', id, property.name,);
      valid = false;
      delete main[property.name];
    } else {
      delete main[property.name];
    }
  }
  if (Object.keys(main,).length === EMPTY) {
    warn('invalid_request', id,);
    return {
      invalid: ! valid,
      risky: true,
    };
  }
  return {
    invalid: ! valid,
    risky: false,
  };
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
      const result = checkRequest(route.main, id,);
      if (result.invalid) {
        errors ++;
      }
      if (result.risky) {
        warnings ++;
      }
      delete route.main;
      for (const key of Object.keys(route,)) {
        warn('unknown_route_property', key, id,);
        warnings ++;
      }
    }
  }
  return {
    errors,
    warnings,
  };
};

export default async(args: string[], cwd: string,): Promise<void> => {
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
    error('validation_errors', `${ errors }`,);
  }
  if (warnings > EMPTY) {
    error('validation_warnings', `${ warnings }`,);
  }
  if (warnings === EMPTY && errors === EMPTY) {
    console.log(logSymbols.success + ' ' + language('no_errors_warnings',),);
  }
};
