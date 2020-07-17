const app = require('http').createServer((request, response) => {
  response.writeHead(202, {});
  response.end();
});

app.listen(3000);