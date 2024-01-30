import {
  Task,
} from './task.js';

export default (tasks: Task[], taskId: string, blacklist: string[], total: number,) => {
  const internalTasks = [];
  for (const task of tasks) {
    if (taskId && task.id !== taskId) {
      if (task.pre) {
        task.pre = task.pre.filter((entry,) => ! blacklist.includes(entry,),);
      }
      if (task.post) {
        task.post = task.post.filter((entry,) => ! blacklist.includes(entry,),);
      }
      for (let i = 0; i < total; i ++) {
        internalTasks.push(task,);
      }
    }
  }
  return internalTasks;
};
