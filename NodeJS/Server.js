/**
 * New node file
 */

var http = require('http');
var fs   = require('fs');
var url  = require('url');


//Creating server

http.createServer(function(request, response) {
	//Parse the request containing file name...
	var pathName = url.parse(request.url).pathname;
	
	// Print the name of the file which request made..
	console.log("File name:::"+pathName);
	
	//Read the file content from request file...
	fs.readFile(pathName.substr(1), function(err, data) {
		if(err){
			response.writeHead(404,{'Context-type':'text/html'})
		}else{
			// success code :200 OK
			response.writeHead(200, {'Context-type':'text/html'})
			response.write(data.toString())
		}
		response.end();
	});
	
}).listen(8081);

//Console will print the message
console.log('Server running at http://127.0.0.1:8081/');