// 1. Create an Express.js Application which serves two html files for "/" and
// "/users" routes.
// 2. Add some static (.js or .css) files to the project that should be
// required by at least one of the HTML files.

const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req, res, next) => {
  res.sendFile(
    path.join(__dirname, '..', 'assignment2', 'views', 'index.html')
  );
});

app.get('/users', (req, res, next) => {
  res.sendFile(
    path.join(__dirname, '..', 'assignment2', 'views', 'users.html')
  );
});

app.listen(3000);
