var express = require('express');
var port = process.env.PORT || 8000;
var app = express();
//var User = require('./models/user.js');
var db = require('./DBconfig.js');
// start listening to requests on port 8000
app.use(function(req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization, Access-Control-Allow-Origin, Access-Control-Allow-Headers');
	next();
});
//app.use(bodyParser.urlencoded({extended: true}));
//app.use(bodyParser.json());
require('./config/middleware.js')(app,express);
require('./config/routes.js')(app,express);

app.listen(port);
// app.post('/',function(req,res){
// var newUser = new User({
// 	full_name: req.body.full_name,
// 	user_name: req.body.user_name,
// 	password: req.body.password
// });

//  newUser.save().then(function(err,newUser){
//  	if(err){
// 		res.send(500,err); 
// 	}
// 	else{
// 		res.send(200,newUser);
// 	}
// });
// });


// app.get('/',function(req,res){
// 	new User({}).fetch().then(function(data){
// 		console.log(data);
// 		res.send(200,data);
// 	}).catch(function(err){
// 		res.status(500);
// 	});
// });
module.exports = app;


