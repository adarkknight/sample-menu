const express = require('express');
const router = express.Router();
const soupSaladCombosController = require('../controllers/soupSaladCombosController.js');

router.get('/', soupSaladCombosController.getCombos);
module.exports = router;