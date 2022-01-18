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

router.get("/specific", (req, res) => {
	res.send("specific post");
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

module.exports = router;
