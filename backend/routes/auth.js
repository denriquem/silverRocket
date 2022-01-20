const express = require("express");
const User = require("../models/User");
const { registerValidation, loginValidation } = require("../validation");
const bcrypt = require("bcrypt");

const router = express.Router();

router.post("/register", async (req, res) => {
	//vaidate data before making user
	const { error } = registerValidation(req.body);
	if (error) {
		return res.status(400).send(error.details[0].message);
	}

	// Check if user is already in db
	const emailExists = await User.findOne({ email: req.body.email });
	if (emailExists) {
		return res.status(400).send("email already exists");
	}

	const salt = await bcrypt.genSalt(10);
	const hashedPword = await bcrypt.hash(req.body.password, salt);

	const user = new User({
		name: req.body.name,
		email: req.body.email,
		password: hashedPword,
	});
	try {
		const savedUser = await user.save();
		res.send(savedUser);
	} catch (err) {
		res.status(400).send(err);
	}
});

module.exports = router;
