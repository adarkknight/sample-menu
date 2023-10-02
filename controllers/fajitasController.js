const fajitasModel = require('../models/fajitasModel');

exports.getFajitas = (req, res) => {
  res.json(fajitasModel.getFajitas());
};