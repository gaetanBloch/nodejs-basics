const fs = require('fs');

const requestHandler = (req, res) => {
  if (req.url === '/') {
    res.write('<html>');
    res.write('<head><title>Enter Message</title></head>');
    res.write('<body><form action="/message" method="post">' +
      '<input type="text" name="message"><br/><br/>' +
      '<button type="submit">Send</button>' +
      '</form></body>');
    res.write('<html>');
    return res.end();
  } else if (req.url === '/message' && req.method === 'POST') {
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
    });
  } else {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
    res.write('<html>');
    res.end();
  }
}

module.exports = {
  handler: requestHandler,
  someText: 'Some hard coded text'
};

