const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
	body: {
		type: String,
		required: true,
	},
	date: {
		type: Date,
		default: Date.now,
	},
	user: {
		id: Number,
		handle: String,
	},
	likes: [
		{
			user: {
				id: Number,
				handle: String,
			},
		},
	],
	comments: [
		{
			body: String,
			user: {
				id: Number,
				handle: String,
			},
		},
	],
});

module.exports = mongoose.model("Posts", PostSchema);
