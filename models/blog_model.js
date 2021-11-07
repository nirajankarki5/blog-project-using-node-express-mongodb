const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'A blog must have a title'],
    unique: true,
  },
  shortDesc: {
    type: String,
    required: [true, 'A blog must have short description'],
  },
  description: {
    type: String,
    required: [true, 'A blog must have a description'],
  },
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
