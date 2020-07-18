require('ts-node',).register(require('../tsconfig',),);
const Worker = require('worker_threads',);
const worker = require('../src/worker/runner',);

const reply = (response,) => Worker.parentPort.postMessage(response,);

Worker.parentPort.on(
  'message',
  (message,) => worker(message, reply,),
);
