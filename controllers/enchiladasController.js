const enchiladasModel = require('../models/enchiladasModel');

exports.getEnchiladas = (req, res) => {
  res.json(enchiladasModel.getEnchiladas());
};
