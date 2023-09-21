const Posts = require('../models/post');

module.exports.home = async function(req, res){
    console.log(req.cookies);
    res.cookie('user_id', 25);


    try{
        const posts = await Posts.find({}).populate({path:'user', select:"-password"}).populate('comments');
        for(let post of posts){

            for(let comment of post.comments){
                console.log(comment.user.email);
                await comment.populate('user');
                console.log(comment.user.fname);
            }

        }


        return res.render('home', {
            title: "Home",
            posts:posts
        });
        

    }catch(err){
        console.log('Error in home controller : ',err);
        return;

    }


  


}

// module.exports.actionName = function(req, res){}