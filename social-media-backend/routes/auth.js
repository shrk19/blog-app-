var express = require('express');
var authControllers = require('../controllers/auth.js');
var verifyToken = require('../verifyToken.js').verifyToken;

var router = express.Router();

router.post('/signup', authControllers.signup);
router.post('/signin', authControllers.signin);
router.get('/logout', authControllers.logout);
router.get('/refetch', verifyToken, authControllers.refetch);

module.exports = router;
