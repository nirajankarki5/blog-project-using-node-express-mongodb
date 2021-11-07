exports.getBlogs = (req, res) => {
  let blogList = [
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
