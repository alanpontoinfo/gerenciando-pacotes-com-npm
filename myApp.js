var express = require('express');
var app = express();
var bGround = require('fcc-express-bground');
require('dotenv').config();

bGround.log('Hello World');

console.log('Hello World');

app.get("/", function(req, res){
res.sendFile(__dirname + "/views/index.html");
})

app.use(express.static(__dirname + "/public"));
app.use("/public", express.static(__dirname + "/public"));

/*app.get("/json", function(req, res){
    res.json({"message":"Hello json"});
})*/

app.get("/json", function(req, res){

var jsonresponse = {"message": "hello json"};
if(process.env.MESSAGE_STYLE === "uppercase"){
    jsonresponse.message=jsonresponse.message.toUpperCase()
}
res.json(jsonresponse);
});


















module.exports = app;