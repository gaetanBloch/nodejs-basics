// 1. Create an Express.js Application which serves two html files for "/" and
// "/users" routes.
// 2. Add some static (.js or .css) files to the project that should be
// required by at least one of the HTML files.

const express = require('express');
const path = require('path');

const indexRoute = require('./routes/index');
const usersRoute = require('./routes/users');

const app = express();

app.use(indexRoute);
app.use(usersRoute);

app.listen(3000);
