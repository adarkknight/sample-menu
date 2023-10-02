const express = require('express');
const router = express.Router();
const quicheController = require('../controllers/quicheController.js');

router.get('/', quicheController.getQuiche);
module.exports = router;