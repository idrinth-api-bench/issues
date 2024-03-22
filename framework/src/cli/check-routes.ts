import jobCreator from '../helper/job-creator.js';
import reqlib from 'app-root-path';
import language, {
  locale,
} from '../helper/language.js';
import {
  DEFAULT_LANGUAGE,
  FIRST_ARGUMENT,
} from '../constants.js';
import validateTasks from "../validate-tasks.js";
import taskTypes from "../task-types.js";

export default async(args: string[]): Promise<void> => {
  await locale(args[FIRST_ARGUMENT] || DEFAULT_LANGUAGE,);
  const job = await jobCreator(`${ reqlib }`,);
  validateTasks(1, 1, job.main);
  let errors = 0;
  let warnings = 0;
  for (const type of taskTypes) {
    if (job[type].length > 0) {
      for (const route of job[type]) {
        if (typeof route.pre !== 'undefined') {
          if (typeof route.pre !== 'object' || !Array.isArray(route.pre)) {
            console.error(language('invalid_pre_definition', route.id));
            errors++;
          } else {
            for (const pre of route.pre) {
              if (typeof pre !== 'string') {
                console.error(language('invalid_pre_definition', route.id));
                errors++;
                break;
              }
            }
            delete route['pre'];
          }
        }
        if (typeof route.post !== 'undefined') {
          if (typeof route.post !== 'object' || !Array.isArray(route.post)) {
            console.error(language('invalid_post_definition', route.id));
            errors++;
          } else {
            for (const post of route.post) {
              if (typeof post !== 'string') {
                console.error(language('invalid_post_definition', route.id));
                errors++;
                break;
              }
            }
            delete route['post'];
          }
        }
        delete route['id'];
        delete route['main'];
        if (Object.keys(route).length > 0) {
          for (const key of Object.keys(route)) {
            console.warn(language('unknown_route_property', key, route.id));
            warnings++;
          }
        }
      }
    }
  }
  if (errors > 0) {
    console.error(language('validation_errors', `${errors}`));
  }
  if (warnings > 0) {
    console.error(language('validation_warnings', `${warnings}`));
  }
};
