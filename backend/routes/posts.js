const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

router.get("/", (req, res) => {
	res.send("We're on posts");
});

router.get("/specific", (req, res) => {
	res.send("specific post");
});

router.post("/", (req, res) => {
	console.log(req.body);
});

module.exports = router;
