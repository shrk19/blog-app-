var express = require('express');
var userControllers = require('../controllers/user.js');
var verifyToken = require('../verifyToken.js').verifyToken;

var router = express.Router();

router.put('/:id', verifyToken, userControllers.updateUser);
router.delete('/:id', verifyToken, userControllers.deleteUser);
router.get('/find/:id', userControllers.findUser);
router.get('/myposts', verifyToken, userControllers.getMyPosts);
router.get('/liked', verifyToken, userControllers.getLikedPost);
router.get('/bookmarked', verifyToken, userControllers.getBookmarkedPost);

module.exports = router;
