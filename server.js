var express = require('express');
var port = process.env.PORT || 8000;
var app = express();
var User = require('./app/models/user');
var db = require('./app/config');
// start listening to requests on port 8000
app.listen(port);
//app.use(bodyParser.urlencoded({extended: true}));
//app.use(bodyParser.json());
app.post('/',function(req,res){
var newUser = new User({
	full_name: req.body.full_name,
	user_name: req.body.user_name,
	password: req.body.password
});

 newUser.save().then(function(err,newUser){
 	if(err){
		res.send(500,err);
	}
	else{
		res.send(200,newUser);
	}
});
});


app.get('/',function(req,res){
	new User({}).fetch().then(function(data){
		console.log(data);
		res.send(200,data);
	}).catch(function(err){
		res.status(500);
	});
});
module.exports = app;


