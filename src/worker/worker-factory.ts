import {
  realpathSync,
} from 'fs';
import Thread from './thread.js';
import WorkerConstructor from './worker-constructor.js';
import {
  FRAMEWORK_ROOT,
} from '../constants.js';

const buildWorker = (
  Worker: WorkerConstructor,
  file: string,
  // eslint-disable-next-line @typescript-eslint/ban-types
  onMessage: Function,
) : Thread => {
  const path = realpathSync(`${ FRAMEWORK_ROOT }/worker/${ file }.js`,);
  const worker = new Worker(path,);
  worker.on('message', (message,) => onMessage(message, worker,),);
  return worker;
};

export default buildWorker;
