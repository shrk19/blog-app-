var error = require("../error.js");
var User = require("../models/User.js");
var Post = require("../models/Post.js");

var createError = error.createError;


module.exports.updateUser = async (req, res, next) => {
    if(req.params.id === req.user._id){
        try{
            const updatedUser = await User.findByIdAndUpdate(
                req.params.id, {
                    $set: req.body
                }, 
                { new : true}
            )
            res.status(200).json(updatedUser)
        }catch(err){
            next(err)
        }
    }else{
        return next(createError(403, "You can only update your account"))
    }
}
module.exports.deleteUser = async (req, res, next) => {
    if(req.params.id === req.user._id){
        try{
            {
                await User.findByIdAndDelete(req.params.id)
                res.status(200).json("Your account has been deleted")
            }
        }catch(err){
            next(err)
        }
    }else{
        return next(createError(403, "You can only delete your account"))
    }
    
}
module.exports.findUser = async (req, res, next) => {
    try{
        const foundUser = await User.findById(req.params.id)
        res.status(200).json(foundUser)
    }catch(err){
        next(err)
    }
}
module.exports.getLikedPost = async (req, res, next) => {
    try{
        const user = await User.findById(req.user._id)
        if(!user) next(createError(401, "Login to see your liked Posts"))

        const likedPosts = user.likedPosts
        const posts = await Post.find({ _id: { $in: likedPosts } });
        res.status(200).json(posts)
        
    }catch(err){
        next(err)
    }
}
module.exports.getMyPosts = async (req, res, next) => {
    try{
        const user = await User.findById(req.user._id)
        if(!user) next(createError(401, "Login to see your Posts"))

        const myPosts = user.createdPosts
        const posts = await Post.find({ _id: { $in: myPosts } });
        res.status(200).json(posts)
        
    }catch(err){
        next(err)
    }
}
module.exports.getBookmarkedPost = async (req, res, next) => {
    try{
        const user = await User.findById(req.user._id)
        if(!user) next(createError(401, "Login to see your bookmarked Posts"))

        const bookmarkedPosts = user.bookmarkedPosts
        const posts = await Post.find({ _id: { $in: bookmarkedPosts } });
        res.status(200).json(posts)
        
    }catch(err){
        next(err)
    }
}
