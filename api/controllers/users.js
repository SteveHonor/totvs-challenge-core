const userModel = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
  authenticate: (req, res, next) => {
    userModel.findOne({
      email:req.body.email
    }, (error, userInfo) => {
     if (error) {
       next(error);
     } else {
      if(bcrypt.compareSync(req.body.password, userInfo.password)) {
        const token = jwt.sign(
          {
            id: userInfo._id
          }, req.app.get('secretKey'), {
            expiresIn: '1h'
          });
        res.json({
            user: {
              id: userInfo._id,
              name: userInfo.name,
              email: userInfo.email
            },
            token:token
        })
      } else {
        res.json({status:"error", message: "Invalid email or password!!!"});
      }
    }
  })}
}
