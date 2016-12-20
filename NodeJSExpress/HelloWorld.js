/**
 * New node file
 */
var express = require('express');
var app = express();

app.get("/hello",function(req,res){
	res.send("Hello world.........");
	console.log("Request app::"+req.app);
});

require('http').Server(app).listen(8000,function(){
	console.log("Listening on port 8000!!!!");
});	