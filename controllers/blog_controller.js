const Blog = require('../models/blog_model');

exports.getBlogs = (req, res) => {
  const blogList = [
    { title: 'Blog 1', description: 'This is description of blog 1' },
    { title: 'Blog 2', description: 'This is description of blog 2' },
    { title: 'Blog 3', description: 'This is description of blog 3' },
  ];
  res.render('index.ejs', { blogList: blogList });
};

exports.addBlog = (req, res) => {
  res.render('add_page.ejs');
};

exports.about = (req, res) => {
  res.render('about.ejs');
};

exports.addNewBlog = async (req, res) => {
  try {
    // you can simply use req.body but it got "[Object: null prototype] { ... }" so using this
    console.log('body is ', JSON.parse(JSON.stringify(req.body)));

    const newBlog = await Blog.create(req.body);

    // redirect to add blog page once the blog is created
    res.status(201).redirect('/add-blog');
  } catch (err) {
    res.status(400).render('404.ejs');
  }
};
