const appetizerModel = require('../models/appetizerModel');

exports.getAppetizers = (req, res) => {
  res.json(appetizerModel.getAppetizers());
};

