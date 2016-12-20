/**
 * New node file
 */
var express = require("express");
var fs = require("fs");
var app = express();

//Get method..
app.get('/listUsers',function(req,res){
	fs.readFile("data"+"/"+"user.json",'utf8', function(err, data) {
		console.log(data);
		res.end(data);
	});
});
//Post method adding user to the existing data..

var user = {
		   "user4" : {
		      "name" : "subbu",
		      "password" : "password4",
		      "profession" : "IT Professional",
		      "id": 4
		   }
		};
app.post('/addUser',function(req,res){
	// First read existing users.
	fs.readFile("data/"+"user.json",'utf8',function(err,data){
		data = JSON.parse(data);
		data["user4"] = user["user4"];
		console.log(data);
		res.end(JSON.stringify(data));
		
	});
	
});

//Show details using parameter...
app.get('/:id',function(req,res){
	//Reading existing user...
	fs.readFile("data/"+"user.json",'utf8',function(err,data){
		
		var users = JSON.parse(data);
		var user = users["user"+req.params.id];
		console.log(user);
		res.end(JSON.stringify(user));
		
	});
});

//DELETE method...
/*app.delete('/deleteUser',function(req,res){
	
//Read existing file
	fs.readFile("data/"+"user.json",'utf8',function(err,data){
		var users = JSON.parse(data);
		delete users["user"+2];
		
		console.log(users);
		res.end(JSON.stringify(users));
	});
	
});*/


app.listen(8000,function(){
	console.log("Listening at port number::"+8000);
});