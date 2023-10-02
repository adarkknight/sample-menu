const express = require('express');
const router = express.Router();
const sandwichesController = require('../controllers/sandwichesController.js');

router.get('/', sandwichesController.getSandwiches);
module.exports = router;