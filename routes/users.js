const express = require('express');
const router = express.Router();

const userController = require('../api/controllers/users');

/**
* @swagger
* /users/signin:
*   post:
*     tags:
*       - Users
*     description: Returns all users with token
*     produces:
*       - application/json
*     parameters:
*       - name: email
*         description: Username to use for login.
*         required: true
*         type: string
*         in: path
*       - name: password
*         description: User's password.
*         required: true
*         type: string
*         in: path
*     responses:
*       200:
*         description: An object
*         type: object
*         schema:
*           - name: Token
*             type: string
*/
router.post('/signin', userController.authenticate);

module.exports = router;
