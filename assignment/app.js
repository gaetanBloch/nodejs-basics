// 1. Spin up a Node.js Server on port 3000
// 2. Handle 2 routes: "/" and "users"
//// a. Return some greeting on "/"
//// b. Return a list of dummy users on "/users"
// 3. Add a form with a username input to the "/" page and submit a POST
// request to "/create-user" upon a button click
// 4. Add the "/create-user" route and parse the incoming data i.e. the
// username and log it to the console
// 5. Redirect to "/" after logging

const http = require('http');

const requestHandler = require('./routes');

const server = http.createServer(requestHandler);

server.listen(3000);
