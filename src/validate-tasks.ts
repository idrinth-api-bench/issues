import {
  Task,
} from './task';

const EMPTY = 0;

const noDuplicateIDs = (tasks: Array<Task>,) => {
  const ids: Array<string> = [];
  for (const task of tasks) {
    if (ids.includes(task.id,)) {
      throw new Error(`The id ${ task.id } is shared.`,);
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
    throw new Error('Can\'t measure no tasks.',);
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
