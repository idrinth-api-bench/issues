import { Task } from "./task.js";

export default (tasks: Task[], blacklist: string[], total: number) => {
  const internalTasks = [];

  for (const task of tasks) {
    // Check if the task is a main task (has 'main' property and no 'pre' or 'post')
    if (task.main && !task.pre && !task.post) {
      for (let i = 0; i < total; i++) {
        // Create a new task object with a shallow copy
        const mainTask = { ...task, pre: undefined, post: undefined };
        internalTasks.push(mainTask);
      }
    } else {
      // Add the task to the internalTasks array
      for (let i = 0; i < total; i++) {
        internalTasks.push(task);
      }
    }
  }

  return internalTasks;
};
