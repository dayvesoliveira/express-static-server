const path = require("path");
const express = require("express");
const cors = require("cors");
const nosniff = require("dont-sniff-mimetype");

// const helmet = require("helmet"); lib completa

const app = express();

app.use(cors());
app.use(nosniff());

// app.use(helmet());
// app.use(helmet.noSniff());

app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));

app.use((req, res, next) => {
	res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

app.listen(5000, () => {
	console.log("Server started on port 5000");
	console.log("CORS-enabled web server listening on port 5000");
	console.log("Define o header X-Content-Type-Options como nosniff");
});
