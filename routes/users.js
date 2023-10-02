// users.js
const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController.js');

// Define user routes
router.get('/', usersController.getAllUsers);
router.get('/:id', usersController.getUserById);
router.post('/', usersController.createUser);
router.put('/:id', usersController.updateUser);
router.delete('/:id', usersController.deleteUser);

module.exports = router;