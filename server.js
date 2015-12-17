var express = require("express");
var app = express();

app.get('/', function(req, res){
    res.send("Done dona done");
    console.log("Done");
});

app.listen(process.env.PORT);
console.log(process.env.PORT);
