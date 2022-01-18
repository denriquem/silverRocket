const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
		min: 6,
	},
	email: {
		type: String,
		required: true,
		max: 255,
	},
	password: {
		type: String,
		required: true,
		max: 1000,
		min: 6,
	},
	date: {
		type: Date,
		deafult: Date.now,
	},
});

module.exports = mongoose.model("User", userSchema);
