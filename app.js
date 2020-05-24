const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  switch (req.url) {
    case '/':
      res.write('<html>');
      res.write('<head><title>Enter Message</title></head>');
      res.write('<body><form action="/message" method="post">' +
        '<input type="text" name="message"><br/><br/>' +
        '<button type="submit">Send</button>' +
        '</form></body>');
      res.write('<html>');
      return res.end();
    case '/message':
      if (req.method === 'POST') {
        const body = [];
        req.on('data', chunk => {
          body.push(chunk);
        });
        return req.on('end', () => {
          const parsedBody = Buffer.concat(body).toString();
          const message = parsedBody.split('=')[1];
          fs.writeFile('message.txt', message, err => {
            res.writeHead(302, { Location: '/' });
            return res.end();
          });
        })
      }
  }
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My First Page</title></head>');
  res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
  res.write('<html>');
  res.end();
});

server.listen(3000);
