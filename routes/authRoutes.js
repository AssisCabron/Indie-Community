const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/AuthenticateController.js');

router.get('/auth/discord', AuthController.authenticate);
router.get('/auth/discord/callback', AuthController.callback);

module.exports = router;
