const execute = require('../main',);
const pino = require('pino',);
// this is using the side-effect of having main start the typescript inclusion
const PinoWrapper = require('../src/logger/pino-wrapper',).PinoWrapper;

const tasks = [ {
  id: 'example',
  main: {
    method: 'get',
    url: 'http://127.0.0.1:8009/', //'https://google.com/',
  },
  pre: [
    __dirname + '/../src/middlewares/cookie',
    __dirname + '/../src/middlewares/csrf-header',
    __dirname + '/../src/middlewares/encoding',
    __dirname + '/../src/middlewares/user-agent',
  ],
  post: [
    __dirname + '/../src/middlewares/cookie',
    __dirname + '/../src/middlewares/csrf-header',
    __dirname + '/../src/middlewares/status-2xx',
  ],
}, ];
const threads = 2;
const repetitions = 10;

// eslint-disable-next-line no-console
execute(threads, repetitions, tasks, console.log, new PinoWrapper(pino(),),);
