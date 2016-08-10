var User = require('./models/user.js');
var Loan = require('./models/loan.js');
var db = require('./DBconfig');
var jwt = require('jwt-simple');
var bcrypt = require('bcrypt-nodejs');
var knex = require('knex');

module.exports = {
	signin: function(req,res,next){
		var username = req.body.username;
		var password = req.body.password;

		new User({username:username}).fetch().then(function(user){
			if(!user){
				next(new Error('user dose not exsit'));
			}
			else{
				bcrypt.compare(password,user.get('password'),function(err,match){
					if(match){
						var token = jwt.encode(user,'secret');
						res.json({token: token});
					}
					else{
						next(new Error('No user'));
					}
				});
			}
		});
	},

	signup: function(req,res,next){
		var username = req.body.username;
		var fullname = req.body.fullname;
		var password = req.body.password;
		var location = req.body.location;
		var loanthing = req.body.loanthing;

		new User({username: username}).fetch().then(function(user){
			if(!user){
				bcrypt.hash(password,null,null,function(err,hash){
					password = hash;
					var newUser = new User({
						username: username,
						password: password,
						fullname: fullname,
						location: location,
						loanthing: loanthing
					});
					newUser.save().then(function(){
						var token = jwt.encode(newUser,'secret');
						res.json({token: token});
					});
				});
			}
			else{
				next(new Error('user exists'));
				//res.status(500).send();
			}
		});
	}
}