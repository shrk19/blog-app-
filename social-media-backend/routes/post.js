var express = require('express');
var postControllers = require('../controllers/post.js');
var verifyToken = require('../verifyToken.js').verifyToken;

var router = express.Router();

router.post("/create", verifyToken, postControllers.addPost);
router.put("/:id", verifyToken, postControllers.editPost);
router.delete("/:id", verifyToken, postControllers.deletePost);
router.get("/:id", postControllers.getPost);
router.get("/", postControllers.getAllPosts);
router.put("/bookmark/:id", verifyToken, postControllers.bookmarkPost);
router.put("/like/:id", verifyToken, postControllers.likePost);

module.exports = router;
