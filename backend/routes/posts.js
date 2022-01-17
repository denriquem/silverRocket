const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

router.get("/", (req, res) => {
	res.send("We're on posts");
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
		console.log(err);
	}
});

module.exports = router;
