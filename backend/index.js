const express = require("express");

const app = express();

// specify path and then the callback
app.get("/", (req, res) => {
	res.send("hello world");
});

app.get("/api/courses", (req, res) => {
	res.send([1, 2, 3]);
});

app.get("/api/courses/:id", (req, res) => {
	res.send(req.params.id);
});

//PORT
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`listening on port ${port}`));
