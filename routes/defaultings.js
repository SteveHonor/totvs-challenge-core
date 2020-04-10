const express = require('express');
const router = express.Router();

const defaultingController = require('../api/controllers/defaultings');

/**
* @swagger
* /defaultings:
*   get:
*     tags:
*       - Defaultings
*     description: Returns all users with token
*     produces:
*       - application/json
*     parameters:
*       - name: x-token
*         description: token of access.
*         required: true
*         type: string
*         in: head
*       - name: page
*         description: default 1
*         required: false
*         type: integer
*         in: query
*       - name: per_page
*         description: default 10
*         required: false
*         type: integer
*         in: query
*       - name: search
*         description: filter name
*         required: false
*         type: string
*         in: query
*       - name: order
*         description: order by field
*         required: false
*         type: string
*         in: query
*     responses:
*       200:
*         description: An object
*         type: object
*         schema:
*           - name: Token
*             type: string
*/
router.get('/', defaultingController.get);

module.exports = router;
