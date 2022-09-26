const express = require("express");

const cookieParser = require('cookie-parser');

const app = express();

const port = 8000;

const db = require('./config/mongoose');

const expressLayouts = require('express-ejs-layouts');

app.use(expressLayouts);

app.use(express.static('./assets'));

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));


app.use(cookieParser());

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