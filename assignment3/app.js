// 1. Create an app with Express and EJS.
// 2. Create a route '/' which holds a <form> that allows users to input their
// name.
// 3. Create a route '/users' Which outputs a <ul> with the user names
// 4. Use HTML includes to re-use some part of the code

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const routes = require('./routes');

const app = express();

app.set('view engine', 'ejs');
app.set('views', './assignment3/views');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(routes);

app.listen(3000);
