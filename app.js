const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

app.use(express.json());

// set tem[late engine to ejs
app.set('view engine', 'ejs');

// set css folder
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  let blogList = [
    { title: 'Blog 1', description: 'This is description of blog 1' },
    { title: 'Blog 2', description: 'This is description of blog 2' },
    { title: 'Blog 3', description: 'This is description of blog 3' },
  ];
  res.render('index.ejs', { blogList: blogList });
});

app.get('/add-blog', (req, res) => {
  res.render('add_page.ejs');
});

app.get('/about', (req, res) => {
  res.render('about.ejs');
});

module.exports = app;
