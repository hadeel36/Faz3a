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
				next(new Error('user does not exist'));
			}
			else{
				bcrypt.compare(password,user.get('password'),function(err,match){
					if(match){
						console.log("hello")
						var token = jwt.encode(user,'secret');
						res.json({token: token, user: user.get('id')});
					}
					else{
						next(new Error('No user'));
					}
				});
			}
		});
	},

	signup: function(req,res,next){
		console.log(req.body)
		var username = req.body.username;
		var fullname = req.body.fullname;
		var password = req.body.password;
		var location = req.body.location;
		var email = req.body.email;
		var lat = req.body.lat;
		var lng = req.body.lng;
		
		new User({username: username}).fetch().then(function(user){
			if(!user){
				bcrypt.hash(password,null,null,function(err,hash){
					password = hash;
					var newUser = new User({
						username: username,
						password: password,
						fullname: fullname,
						location: location,
						email: email,
						lat: lat,
						lng: lng
					});
					newUser.save().then(function(){
						var token = jwt.encode(newUser,'secret');
						res.json({token: token, userId: newUser.id});
					});
				});
			}
			else{
				next(new Error('user exists'));
			}
		});
	},

	viewLoans: function(req,res){
		//u.id as userId
		var userId = req.params.id;
		db.knex.raw('select l.*, u.fullname from loans l join users u on u.id=l.userid where l.userid <> '+userId+' and l.active="1"')
		.then(function(data){
			res.status(200);
			res.json({data: data});
		});
	},

	addLoan: function(req,res){
		var quntity = req.body.quntity;
		for(var i=0 ; i<quntity ; i++){
			var newLoan = new Loan({
				userid: req.body.id,
				loan_name: req.body.loan_name,
				description: req.body.description,
				available: req.body.available,
				loanimage: req.body.image,
				lend: false,
				active: true
			});
			newLoan.save().then(function(){
				res.status(200);
				res.json({done: 'done'});
			});
		}
	},

	viewUsers: function(req,res){
		new User({}).fetchAll().then(function(users){
			res.status(200);
			res.json({data: users});
		});
	},

	lend: function(req,res){
		var id = req.body.id;
		new Loan({id: id}).fetch().then(function(loan){
			loan.save({
				active: req.body.active,
				lend: req.body.lend,
				borrowedperson: req.body.borrowedperson
			})
			.then(function () {
				res.status(200);
				res.json({error: false, data: {message: 'User details updated'}});
			})
		});
	},

	viewBorrowedItem: function(req,res){
	
		var borrowedperson = req.params.id;
		db.knex.select().from('loans').where({borrowedperson: borrowedperson})
		.then(function(data){
			res.json({data: data});
		});
	},

	viewLend: function(req,res){

		var userid = req.params.id;
		db.knex.select().from('loans').where({userid: userid})
		.then(function(data){
			res.json({data: data});
		});
	},

	deleteLoan: function(req,res){

		var id = req.params.id;
		db.knex('loans').where('id',id).del()
		.then(function(){
			res.status(200);
		});

	},

	activeLoan: function(req,res){

		var id = req.params.id;
		new Loan({id: id}).fetch().then(function(loan){
			loan.save({
				active: req.body.active
			})
			.then(function () {
				res.status(200);
				res.json({error: false, data: {message: 'User details updated'}});
			})
		});
	},

	deactiveLoan: function(req,res){

		var id = req.params.id;
		new Loan({id: id}).fetch().then(function(loan){
			loan.save({
				active: req.body.lend
			})
			.then(function () {
				res.status(200);
				res.json({error: false, data: {message: 'User details updated'}});
			})
		});
	},

	getCurrentUserPosition: function(req,res){

		var currentId = req.params.id;
		db.knex.raw('select lat, lng from users where id ='+currentId)
		.then(function(data){
			res.status(200);
			res.json({data: data});
		});
	},

	getOwnerPosition: function(req,res){

		var ownerId = req.params.id;
		db.knex.raw('select lat, lng from users where id ='+ownerId)
		.then(function(data){
			console.log("data",data);
			res.status(200);
			res.json({data: data});
		});
	},

	upload: function(req,res){

		var id = req.body.id;
		console.log("body",req.body);
		new Loan({userid: id}).fetch().then(function(loan){
			console.log("hadeel",loan);
			loan.save({
				loanimage: req.body.image,
			})
			.then(function () {
				res.status(200);
				res.json({error: false, data: {message: 'User details updated'}});
			})
		});
	}
}
