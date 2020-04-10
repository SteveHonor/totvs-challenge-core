const defaultingModel = require('../models/defaulting');

module.exports = {
  /**
  * @swagger
  * path: /defaultings
  * operations:
  *   -  httpMethod: GET
  *      summary: Defaulter clients
  *      notes: Returns a user based on username
  *      responseClass: Defaulting
  *      nickname: Defaulter
  *      consumes:
  *        - application/json
  *      parameters:
  *        - name: page
  *          description: Your username
  *          paramType: query
  *          required: true
  *          dataType: string
  *        - name: per_oage
  *          description: Your password
  *          paramType: query
  *          required: true
  *          dataType: string
  */
  get: (req, res, next) => {
    defaultingModel.paginate(
      {
        name: {
          $regex: req.query.search || '',
          $options: 'i'
        }
      }, {
        page: parseInt(req.query.page) || 1,
        limit: parseInt(req.query.per_page) || 10,
        sort: req.query.order
      }, (err, defaultings) => {
        if (err) {
          next(err);
        } else {
          res.json({
            defaultings: defaultings
          })
        }
      }
    )
  }
}
