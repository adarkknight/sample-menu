const express = require('express');
const router = express.Router();
const entreesController = require('../controllers/entreesController.js');

router.get('/', entreesController.getEntrees);
module.exports = router;