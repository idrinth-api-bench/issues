try {
  require('ts-node',).register(require('../tsconfig',),);
} catch (E) {
  //this is only relevant for development
}
const Worker = require('worker_threads',);
const worker = require('../src/worker/calculator',);

Worker.parentPort.on(
  'message',
  (message,) => Worker.parentPort.postMessage(worker(message, ),),
);
