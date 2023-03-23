const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

router.get('/api/user', UserController.getUser);

module.exports = router;
