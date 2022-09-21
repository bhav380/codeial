module.exports.profile = function(req, res) {
    return res.render('profile', {
        Title: "Profile"
    });
}


module.exports.contact = function(req, res) {
    return res.end('<h1>Contact user</h1>')
}