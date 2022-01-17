const express = require("express");
const mongoose = require("mongoose");
const app = express();

const pword = process.env.PWORD;

// Middlewares
app.use("/posts", () => {
	console.log("this is a middleware running");
});

// Routes
app.get("/", (req, res) => {
	res.send("We're home");
});

app.get("/posts", (req, res) => {
	res.send("We're on posts");
});

// Connect to DB
mongoose.connect(
	`mongodb+srv://shlomoLiquid:${pword}@thebackend.laolw.mongodb.net/theBackEnd?retryWrites=true&w=majority`,
	() => {
		console.log("connected to DB");
	}
);

//PORT
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`listening on port ${port}`));
