const express = require('express');
const router = express.Router();
const tacosController = require('../controllers/tacosController.js');

router.get('/', tacosController.getTacos);
module.exports = router;