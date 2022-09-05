const express = require("express");

const app = express();

const port = 8000;

//setting up router
app.use('/', require('./routes'));


app.listen(port, function(err) {
    if (err) {
        console.log("ERror in setting server");
        return;
    }

    console.log("Server is running at port number : ", port);
    return;
});