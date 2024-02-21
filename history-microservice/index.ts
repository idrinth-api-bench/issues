import express from 'express';

const app = express();

app.get('/', (request, response) =>  {
  response.status(200).json();
});
app.get('/history', (request, response) =>  {
  response.status(200).json();
});

app.listen(process.env.SERVER_PORT || 80);
