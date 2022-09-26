const express = require('express');

const router = express.Router();

const homeController = require('../controllers/home_controller');

const postsController = require('../controllers/posts_controller');







router.get('/', homeController.home);






router.use('/user', require('./user'));

router.post('/post', postsController.posts);

console.log("router loaded");

module.exports = router;