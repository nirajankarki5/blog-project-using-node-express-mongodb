const express = require('express');
const blogController = require('../controllers/blog_controller');

const router = express.Router();

router.route('/').get(blogController.getBlogs);

router
  .route('/add-blog')
  .get(blogController.addBlog)
  .post(blogController.addNewBlog);

router.route('/about').get(blogController.about);

module.exports = router;
