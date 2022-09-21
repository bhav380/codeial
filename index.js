const express = require("express");

const app = express();

const port = 8000;

const expressLayouts = require('express-ejs-layouts');

app.use(expressLayouts);

app.use(express.static('./assets'));

app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

//setting up router
app.use('/', require('./routes'));

//setting up ejs

app.set('view engine', 'ejs');
app.set('views', './views');


app.listen(port, function(err) {
    if (err) {
        console.log("ERror in setting server");
        return;
    }

    console.log("Server is running at port number : ", port);
    return;
});