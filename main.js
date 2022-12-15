require('ts-node',).register(require('./tsconfig',),);

module.exports = require('./src/main',).default;
module.exports.run = require('./src/main',).run;
