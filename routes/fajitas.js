const express = require('express');
const router = express.Router();
const fajitasController = require('../controllers/fajitasController.js');

router.get('/', fajitasController.getFajitas);
module.exports = router;