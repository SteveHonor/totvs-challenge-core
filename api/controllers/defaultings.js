const defaultingModel = require('../models/defaulting');

module.exports = {
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
