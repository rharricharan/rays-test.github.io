const path = require('path');
const express = require("express");
const mongoose = require("mongoose");
const app = express();

mongoose
	.connect(MONGO_URI)
	.then(() => {
		
		app.use(express.json());
		app.use(authentication);
		app.use("/upload", productRouter);
		app.use("/users", userRouter);

		app.use(express.static(path.join(__dirname, "client", "build")));
		app.get("/*", (req, res) => {
      res.sendFile(path.join(__dirname, "client", "build", "index.html"));
    });

	.catch((error) => console.log(error));
