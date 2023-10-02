const express = require('express');
const router = express.Router();
const appetizersController = require('../controllers/appetizersController.js');

router.get('/', appetizersController.getAppetizers);
module.exports = router;