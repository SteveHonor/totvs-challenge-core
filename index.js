const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('./configurations/database');

const defaultings = require('./routes/defaultings');
const users = require('./routes/users');

var jwt = require('jsonwebtoken');

const app = express();

// jwt secret token
app.set('secretKey', '23455476854325678');

// connection to mongodb
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(cors({
  origin: 'http://localhost:8080',
  credentials: true
}));

// public route
app.use('/users', users);

// private route
app.use('/defaultings', validateUser, defaultings);

function validateUser(req, res, next) {
  jwt.verify(req.headers['x-token'], req.app.get('secretKey'), (err, decoded) => {
    if (err) {
      res.json({status:"error", message: err.message});
    } else {
      next();
    }
  });
}

app.listen(3000, () => {
  console.log('Node server listening on port 3000');
});

module.exports = app
