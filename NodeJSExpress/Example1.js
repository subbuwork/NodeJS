/**
 * New node file
 */
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var fs = require('fs');
var multer = require('multer');
var urlEncoder = bodyParser.urlencoded({extended:false});
app.use(express.static('html'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(multer({ dest: '/tmp/'}));

app.get('/FileUpload.html',function(req,res){
	res.sendFile("FileUpload.html");
});
app.get('/process_get',function(req,res){
	res={
			
			first_name:req.query.first_name,
			last_name:req.query.last_name
	};
	console.log(res);
	res.end(JSON.stringify(res));
});

app.post('/porcess_post',urlEncoder,function(req,res){
	res ={
			first_name:req.query.first_name,
			last_name:req.query.last_name
	};
	
	console.log(res);
	res.end(JSON.stringify(res));
	
});

app.post('/file_upload',function(req,res){
	console.log(req.files.file.name);
	console.log(req.files.file.path);
	console.log(req.files.file.type);
	
	
	 var file = __dirname + "/" + req.files.file.name;
	   
	   fs.readFile( req.files.file.path, function (err, data) {
	      fs.writeFile(file, data, function (err) {
	         if( err ){
	            console.log( err );
	            }else{
	               res = {
	                  message:'File uploaded successfully',
	                  filename:req.files.file.name
	               };
	            }
	         console.log( res );
	         res.end( JSON.stringify( res ) );
	      });
	   });
	
});




app.listen(8000,function(){
	console.log("Listening on port number::"+8000);
});
