import requestHandler from './route';

const http = require('http');

const server = http.createServer((req, res) => {
  requestHandler(req, res);
});

server.listen(3000);
