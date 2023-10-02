const quicheModel = require('../models/quicheModel');

exports.getQuiche = (req, res) => {
  res.json(quicheModel.getQuiche());
};