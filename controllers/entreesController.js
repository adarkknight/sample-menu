const entreesModel = require('../models/entreesModel');

exports.getEntrees = (req, res) => {
  res.json(entreesModel.getEntrees());
};
