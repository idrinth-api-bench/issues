const main = require('../main',);
const threads = 2;
const repeats = 5;
main(threads, repeats, [ {
  id: 'example',
  main: {
    method: 'get',
    url: 'http://127.0.0.1:3000/',
  },
  pre: [ '#user-agent', ],
  post: [ '#status-2xx', ],
}, ],);
