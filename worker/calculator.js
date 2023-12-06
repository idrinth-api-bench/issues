import Worker from 'worker_threads';
import worker from '../src/worker/calculator';

Worker.parentPort.on(
  'message',
  (message,) => Worker.parentPort.postMessage(worker(message, ),),
);
