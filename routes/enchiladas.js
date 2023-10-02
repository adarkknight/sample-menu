const express = require('express');
const router = express.Router();
const enchiladasController = require('../controllers/enchiladasController.js');

router.get('/', enchiladasController.getEnchiladas);
module.exports = router;