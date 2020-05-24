const requestHandler = (req, res) => {

  const rootHandler = () => {
    res.write('<html>');
    res.write('<head><title>Greetings</title></head>');
    res.write('<body>');
    res.write('<h1>Greetings from the server!</h1>');
    res.write('<form action="/create-user" method="post">' +
      '<input type="text" name="username" placeholder="username">' +
      '<button type="submit">Create User</button>' +
      '</form>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
  };

  const usersHandler = () => {
    res.write('<html>');
    res.write('<head><title>Users</title></head>');
    res.write('<body><ul>' +
      '<li>User 1</li>' +
      '<li>User 2</li>' +
      '<li>User 3</li>' +
      '<li>User 4</li>' +
      '</ul></body>');
    res.write('</html>');
    return res.end();
  };

  const logUserHandler = () => {
    if (req.method === 'POST') {
      const body = [];
      req.on('data', chunk => {
        body.push(chunk);
      });
      req.on('end', () => {
        const parsedBody = Buffer.concat(body).toString();
        const username = parsedBody.split('=')[1];
        console.log(username);
      });
      return res.end();
    } else {
      return rootHandler();
    }
  };

  switch (req.url) {
    case '/':
      return rootHandler();
    case '/users':
      return usersHandler();
    case '/create-user':
      return logUserHandler();
    default:
      return rootHandler();
  }
};

module.exports = requestHandler;
