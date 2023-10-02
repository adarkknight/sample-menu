const greenSaladsModel = require('../models/greenSaladsModel');

exports.getSalads = (req, res) => {
  res.json(greenSaladsModel.getSalads());
};