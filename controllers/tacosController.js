const tacosModel = require('../models/tacosModel');

exports.getTacos = (req, res) => {
  res.json(tacosModel.getTacos());
};