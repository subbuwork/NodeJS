/**
 * Express provides a built-in middleware express.static to serve static files, such as images, CSS, JavaScript, etc.
   You simply need to pass the name of the directory where you keep your static assets, to the express.
   static middleware to start serving the files directly. For example, if you keep your images, 
   CSS, and JavaScript files in a directory named public, you can do this −
   app.use(express.static('public'));
 */

var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/',function(req,res){
	console.log("serviing static files.....");
	res.send("Serving Static Files.....");
	console.log("Mehtod name::"+req.method);
});

app.listen(8000,function(){
	console.log("Listening on port number:::"+8000);
});