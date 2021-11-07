const express = require("express");
const fs = require("fs");

const app = express();

app.use(express.json());

// set tem[late engine to ejs
app.set("view engine", "ejs");

app.get("/blog/home", (req, res) => {});

module.exports = app;
