const express = require('express');
const router = express.Router();

const userController = require('../api/controllers/users');

router.post('/signin', userController.authenticate);

module.exports = router;
