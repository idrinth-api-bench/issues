const PORT = 48901;
const STATUS_NO_RESPONSE = 202;
const DELAY = 1357;
const EXIT_SUCCESS = 0;

const delay = (time,) => new Promise((resolve,) => setTimeout(resolve, time,),);

const server = require('http',)
  .createServer((req, res,) => {
    res.writeHead(STATUS_NO_RESPONSE,);
    res.end();
    setImmediate(async() => {
      await delay(DELAY,);
      server.close();
      await delay(DELAY,);
      process.exit(EXIT_SUCCESS,);
    },);
  },)
  .listen(PORT,);
