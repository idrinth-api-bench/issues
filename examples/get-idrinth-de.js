const execute = require('../main',);

const tasks = [ {
  id: 'example',
  main: {
    method: 'get',
    url: 'https://idrinth.de/',
  },
  pre: [
    __dirname + '/../src/middlewares/cookie',
    '^csrf-header',
    '#encoding',
    __dirname + '/../src/middlewares/user-agent',
  ],
  post: [
    __dirname + '/../src/middlewares/cookie',
    __dirname + '/../src/middlewares/csrf-header',
    __dirname + '/../src/middlewares/status-2xx',
  ],
}, ];
const threads = 2;
const repetitions = 18;

execute(threads, repetitions, tasks,);
