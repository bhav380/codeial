const Comments = require('../models/comment');
const Posts = require('../models/post');

module.exports.create = async function(req,res){

    try{

        const comment = await Comments.create({
            body: req.body.content,
            user: req.user._id,
            post: req.params.id
        })


        const post = await Posts.findById(req.params.id);

        post.comments.push(comment._id);
        post.save();


        return res.redirect('back');



    }catch(err){
        console.log('Error in Comments controller :: ', err);
    }
}