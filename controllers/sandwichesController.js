const sandwichesModel = require('../models/sandwichesModel');

exports.getSandwiches = (req, res) => {
  res.json(sandwichesModel.getSandwiches());
};