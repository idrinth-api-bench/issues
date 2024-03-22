const {
  register,
  // eslint-disable-next-line @typescript-eslint/no-var-requires
} = require('node:module',);

register('file://' + __dirname + '/no-import-of-resources.js',);
