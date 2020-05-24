const requestHandler = (req, res) => {

  const rootHandler = () => {
    res.write('<html>');
    res.write('<head><title>Greetings</title></head>');
    res.write('<body><h1>Greetings from the server!</h1></body>');
    res.write('<html>');
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
    res.write('<html>');
    return res.end();
  };

  switch (req.url) {
    case '/':
      return rootHandler();
    case '/users':
      return usersHandler();
    default:
      return rootHandler();
  }
};

module.exports = requestHandler;
