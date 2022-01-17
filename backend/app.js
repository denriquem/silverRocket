require("dotenv/config");
const express = require("express");
const mongoose = require("mongoose");
const postsRoute = require("./routes/posts");
const bodyParser = require("body-parser");
const app = express();

const pword = process.env.PWORD;

app.use(bodyParser.json());

// Middlewares
app.use("/posts", postsRoute);

// Routes
app.get("/", (req, res) => {
	res.send("We're home");
});

// Connect to DB
mongoose
	.connect(
		`mongodb+srv://shlomoLiquid:${pword}@thebackend.laolw.mongodb.net/theBackEnd?retryWrites=true&w=majority`,
		{
			useNewUrlParser: true,
			useUnifiedTopology: true,
		}
	)
	.then(() => console.log("db connected"))
	.catch((err) => console.log(err));

//PORT
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`listening on port ${port}`));
