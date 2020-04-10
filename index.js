const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('./configurations/database');

const defaultings = require('./routes/defaultings');
const users = require('./routes/users');

const swaggerJSDoc = require('swagger-jsdoc');

const app = express();

const jwt = require('jsonwebtoken');

// jwt secret token
app.set('secretKey', '23455476854325678');

// swagger definition
let swaggerDefinition = {
  info: {
    title: 'Totvs Challenge API',
    version: '1.0.0',
    description: 'API Defaulter clients',
  },
  host: 'localhost:3000',
  basePath: '/',
};

let options = {
  swaggerDefinition: swaggerDefinition,
  apis: ['./routes/*.js'],
};

let swaggerSpec = swaggerJSDoc(options);

app.get('/swagger.json', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});

// connection to mongodb
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(cors({
  origin: 'http://localhost:8080',
  credentials: true
}));

function validateUser (req, res, next) {
  jwt.verify(req.headers['x-token'], req.app.get('secretKey'), (err, decoded) => {
    if (err) {
      res.json({status:"error", message: err.message});
    } else {
      next();
    }
  });
}

// public route
app.use('/users', users);

// private route
app.use('/defaultings', validateUser, defaultings);

app.listen(3000, () => {
  console.log('Node server listening on port 3000');
});

module.exports = app
