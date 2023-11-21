try {
  require('ts-node',).register(require(__dirname + '/tsconfig',),);
} catch (E) {
  //this is only relevant for development
}

module.exports = require('./src/main',).default;
module.exports.run = require('./src/main',).run;
