/**
 * New node file
 */
var express = require('express');
var app = express();

app.get('/',function(req,res){
	console.log("Got request for HTTP Get method!!!!");
	res.send('Hello Get...');
	
});

app.post("/post1",function(req,res){
	console.log("Got POST request for home page.....");
	res.send('Hello POST....');
	
});

/*app.delete("/delete_user",function(req,res){
	console.log("Got request for delete home page....");
	res.send('Hello Delete....');
});*/

app.get('/list_users',function(req,res){
	console.log("Got request for list user...");
	res.send('Page Listing');
	
});

app.get('/ab*cd',function(req,res){
	console.log("Pattern match request......");
	res.send("Pattern matching...");
});

app.listen(8000,function(){
	console.log("Listening on port number:::"+8000);
});






