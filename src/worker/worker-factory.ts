import {
  realpathSync,
} from 'fs';
import Thread from './thread.js';
import WorkerConstructor from './worker-constructor.js';
import {
  fileURLToPath,
} from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url,),);

const buildWorker = (
  Worker: WorkerConstructor,
  file: string,
  // eslint-disable-next-line @typescript-eslint/ban-types
  onMessage: Function,
) : Thread => {
  const path = realpathSync(`${ __dirname }/../worker/${ file }.js`,);
  const worker = new Worker(realpathSync(path,),);
  worker.on('message', (message,) => onMessage(message, worker,),);
  return worker;
};

export default buildWorker;
