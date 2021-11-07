const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const blogRouter = require('./routes/blog_routes');

const app = express();

// app.use(express.json());

// set tem[late engine to ejs
app.set('view engine', 'ejs');

// set css folder
app.use(express.static(path.join(__dirname, 'public')));

// allow us to parser urlencoded forms
// allows us to use "req.body" property
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', blogRouter);

// 404 error page display
app.use((req, res) => {
  res.status(404).render('404.ejs');
});

module.exports = app;
