const express = require('express');
const path = require('path');

const blogRouter = require('./routes/blog_routes');
const app = express();

app.use(express.json());

// set tem[late engine to ejs
app.set('view engine', 'ejs');

// set css folder
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', blogRouter);

module.exports = app;
