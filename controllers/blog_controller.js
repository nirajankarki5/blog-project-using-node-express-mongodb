const Blog = require('../models/blog_model');

exports.getBlogs = async (req, res) => {
  // const blogList = [
  //   { title: 'Blog 1', description: 'This is description of blog 1' },
  //   { title: 'Blog 2', description: 'This is description of blog 2' },
  //   { title: 'Blog 3', description: 'This is description of blog 3' },
  // ];
  const blogList = await Blog.find();
  res.render('index.ejs', { blogList: blogList });
};

exports.getBlogById = async (req, res) => {
  // console.log(req.params);
  const blog = await Blog.find({ _id: req.params.id });
  res.render('single_blog.ejs', { blog: blog[0] });
};

exports.addBlog = (req, res) => {
  res.render('add_page.ejs');
};

exports.about = (req, res) => {
  res.render('about.ejs');
};

exports.addNewBlog = async (req, res) => {
  try {
    const newBlog = await Blog.create(req.body);
    // redirect to add blog page once the blog is created
    res.status(201).redirect('/add-blog');
  } catch (err) {
    res.status(400).render('404.ejs');
  }
};
