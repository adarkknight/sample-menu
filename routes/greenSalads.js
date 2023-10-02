const express = require('express');
const router = express.Router();
const greenSaladsController = require('../controllers/greenSaladsController.js');

router.get('/', greenSaladsController.getSalads);
module.exports = router;