var mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    }, 
    username: {
        type: String,
        required: true
    },
    title: {
        type: String, 
    }, 
    body: {
        type: String, 
    }, 
    tags: {
        type: [String], 
        default: []
    }, 
    likes: {
        type: Number,
        default: 0
    }
}, {timestamps: true})

module.exports = mongoose.model("Post", PostSchema);