module.exports.home = function(req, res) {
    console.log("controller loaded");

    console.log(req.cookies);

    res.cookie('name', 'Bhawesh Rathour');
    return res.render('home', {
        Title: "Home"
    });
}