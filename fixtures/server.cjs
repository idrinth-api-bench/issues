const { parentPort } = require('worker_threads');

const PORT = 8901;
const STATUS_NO_RESPONSE = 202;

const server = require('http',)
  .createServer(function(req, res,) {
    res.writeHead(STATUS_NO_RESPONSE,);
    res.end();
  },)
  .listen(PORT,);

parentPort.postMessage('started');