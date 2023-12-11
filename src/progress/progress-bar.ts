import {
  SingleBar,
} from 'cli-progress';
import Job from '../job.js';
import Progress from './progress.js';

const SINGLE = 1;
const EMPTY = 0;

class ProgressBar implements Progress {
  private bar: SingleBar;

  start(job: Job, repetitions: number, threads: number,): void {
    const barLength = (() => {
      const main = job.main.length * repetitions * threads;
      const mainFactor = SINGLE + job.afterEach.length + job.beforeEach.length;
      const calculation = job.main.length;
      const pre = job.before.length + job.beforeTask.length * job.main.length;
      const post = job.after.length + job.afterTask.length * job.main.length;
      return pre + main * mainFactor + post + calculation;
    })();
    this.bar = new SingleBar({
      stopOnComplete: true,
      clearOnComplete: true,
    },);
    this.bar.start(barLength, EMPTY,);
  }

  increment = () => {
    if (this.bar) {
      this.bar.increment();
    }
  };

  stop = () => {
    if (this.bar) {
      this.bar.stop();
    }
  };
}

export default ProgressBar;
