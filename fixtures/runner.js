const main = require('../main');

main(2,5, [{  id: 'example',
  main: {
    method: 'get',
    url: 'http://127.0.0.1:3000/',
  },
  pre: [
    '#user-agent',
  ],
  post: [
    '#status-2xx',
  ],
}]);