const express = require('express');
const router = express.Router();

const defaultingController = require('../api/controllers/defaultings');

router.get('/', defaultingController.get);

module.exports = router;
