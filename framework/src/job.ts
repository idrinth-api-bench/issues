import Task from './task.js';

export interface Job {
    before: Task[],
    beforeTask: Task[],
    beforeEach: Task[],
    main: Task[],
    afterEach: Task[],
    afterTask: Task[],
    after: Task[],
}
export default Job;
