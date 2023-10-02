const soupSaladCombosModel = require('../models/soupSaladCombosModel');

exports.getCombos = (req, res) => {
  res.json(soupSaladCombosModel.getCombos());
};