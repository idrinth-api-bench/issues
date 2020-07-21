const PORT = 8901;
const STATUS_NO_RESPONSE = 202;

require('http',)
  .createServer(function(req, res,) {
    res.writeHead(STATUS_NO_RESPONSE,);
    res.end();
  },)
  .listen(PORT,);
