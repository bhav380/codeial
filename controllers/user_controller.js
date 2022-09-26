const User = require('../models/user');

module.exports.profile = function(req, res) {
    return res.render('profile', {
        Title: "Profile"
    });
}


module.exports.contact = function(req, res) {
    return res.end('<h1>Contact user</h1>')
}

module.exports.signUp = function(req, res) {
    return res.render('signUp', {
        Title: 'Codeial Sign Up page'
    });
};



module.exports.register = function(req, res) {


    if (req.body.pass != req.body.confirm_pass) {
        return res.redirect('back');
    }

    console.log(req.body);
    User.findOne({ email: req.body.email }, function(err, user) {
        if (err) {
            console.log("error in finding email while signing Up");
            return;
        }

        if (!user) {

            User.create({
                email: req.body.email,
                password: req.body.pass,
                name: req.body.name
            }, function(err, newUser) {
                if (err) {
                    console.log("Error in registering new user");
                    return res.end("<h1> User with this email address is already registered </h1>");
                }

                return res.redirect('back');
            });

        } else res.redirect('back');
    })
};



module.exports.login = function(req, res) {


    User.find({}, function(err, users) {

        if (err) {
            console.log("Error in logging in user");
            return;
        }

        for (let i = 0; i < users.length; i++) {
            if (users[i].email == req.body.email) {
                if (users[i].password == req.body.pass) {
                    return res.end("<h1> Successfully logged in <h1>");
                } else {
                    return res.end("<h1>User password in incorrect<h1>");
                }
            }
        }

        return res.end("<h1>Email id not found<h1>");

    });
}