const Post = require('../models/post');


module.exports.home = function(req, res) {
    console.log("controller loaded");

    console.log(req.cookies);

    Post.find({}, function(err, posts) {

        return res.render('home', {
            Title: "Home",
            Posts: posts
        });

    });

}