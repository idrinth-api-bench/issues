import Job from '../job.js';
import Progress from './progress.js';

class NoProgress implements Progress {
  // eslint-disable-next-line class-methods-use-this, @typescript-eslint/no-unused-vars
  start(job: Job, repetitions: number, threads: number,): void {
  }

  // eslint-disable-next-line class-methods-use-this
  increment() {
  }

  // eslint-disable-next-line class-methods-use-this
  stop() {
  }
}

export default NoProgress;
