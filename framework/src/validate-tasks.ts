import Task from './task.js';
import language from './helper/language.js';
import {
  EMPTY,
} from './constants.js';

const noDuplicateIDs = (tasks: Array<Task>,) => {
  const ids: Array<string> = [];
  for (const task of tasks) {
    if (ids.includes(task.id,)) {
      throw new Error(language('duplicate_task_id', task.id,),);
    }
    ids.push(task.id,);
  }
};
const executableAmount = (
  repetitions: number,
  threads: number,
  tasks: Array<Task>,
): void => {
  if (tasks.length === EMPTY || repetitions <= EMPTY || threads <= EMPTY) {
    throw new Error(language('no_tasks',),);
  }
};

export default function validateTasks(
  repetitions: number,
  threads: number,
  tasks: Array<Task>,
): void {
  executableAmount(repetitions, threads, tasks,);
  noDuplicateIDs(tasks,);
}
