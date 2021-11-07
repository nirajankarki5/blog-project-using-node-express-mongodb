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

exports.addNewBlog = (req, res) => {
  // you can simply use req.body but it got "[Object: null prototype] { ... }" so using this
  console.log('body is ', JSON.parse(JSON.stringify(req.body)));
  res.redirect('/add-blog');
};
