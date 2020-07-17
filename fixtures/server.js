const PORT = 3000;
const STATUS = 202;
const app = require('http',).createServer((request, response,) => {
  response.writeHead(STATUS, {},);
  response.end();
},);

app.listen(PORT,);
