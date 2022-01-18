const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

router.get("/", async (req, res) => {
	try {
		const posts = await Post.find();
		res.json(posts);
	} catch (err) {
		res.json({ message: err });
	}
});

router.get("/:postId", async (req, res) => {
	try {
		const post = Post.findById(req.params.postId);
		res.json(post);
	} catch (err) {
		res.json({ message: err });
	}
});

router.post("/", async (req, res) => {
	console.log(req.body);
	const post = new Post(req.body);
	try {
		const savedPost = await post.save();
		res.json(savedPost);
	} catch (err) {
		res.json(err);
	}
});

router.delete("/:postId", async (req, res) => {
	try {
		const removedPost = await Post.remove({ _id: req.params.postId });
		res.json(removedPost);
	} catch (err) {
		res.json(err);
	}
});

router.patch("/:postId", async (req, res) => {
	try {
		const updatedPost = await Post.updateOne(
			{ _id: req.params.postId },
			{ $set: { body: req.body.body } }
		);
		res.json(updatedPost);
	} catch (err) {
		res.json(err);
	}
});

module.exports = router;
