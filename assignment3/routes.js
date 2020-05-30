const express = require('express');
const path = require('path');

const router = express.Router();

const users = [];

router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/users', (req, res, next) => {
  res.render('users');
});

router.post('/users', (req, res, next) => {
  users.push(req.body.user);
  res.redirect('/users');
});

module.exports = router;