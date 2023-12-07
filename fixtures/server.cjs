const PORT = 48901;
const STATUS_NO_RESPONSE = 202;

require('http',)
  .createServer((req, res,) => {
    res.writeHead(STATUS_NO_RESPONSE,);
    res.end();
    process.exit(0);
  },)
  .listen(PORT,);
