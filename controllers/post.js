const Post = require("../models/post");

const addNewPost = async (req, res) => {
    try {
        const post = new Post(req.body);
        await post.save();
        res.status(200).send(post);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find();  
        res.send(posts);
    } catch (error) {
        res.status(400).send(error.message);
    }
};


const getPostById = async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId);
        if (post) res.send(post);
        else res.status(404).send("Post not found");
    } catch (error) {
        res.status(400).send(error.message);
    }
};

module.exports = {
    addNewPost,
    getAllPosts,
    getPostById,
};