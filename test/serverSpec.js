var expect = require('chai').expect;
var chai = require('chai')
    ,chaiHttp = require('chai-http');
var request = require('request');
var server = require('../server/server.js');
var db = require('../server/DBconfig.js');
var User = require('../server/models/user.js');
var Loan = require('../server/models/loan.js');
var controller = require('../server/DBcontrollers.js');
var bcrypt = require('bcrypt-nodejs');

var should = chai.should();
chai.use(chaiHttp);

describe('' , function(done){
	

	describe('user create', function(){
		//var requestWithLocalStorage = request.defaults({jar: true});
		beforeEach(function(){
			new User({
				'username': 'test',
				'password': 'test'
			}).save().then(function(){
				var options = {
					'method': 'POST',
					'followAllRedirect': true,
					'uri': 'http://127.0.0.1:8000/signin',
					'json': {
						'username': 'test',
						'password': 'test'
					}
				};
				//login via from and save session info
				// requestWithLocalStorage(options, function(error,res,body){
				// 	done();
				// });
			});
		});
	});

	describe('signin' , function(){
	
		beforeEach(function(){
		//delete user test from db so it can be created later for the test
			db.knex('users')
			.where('username','=','test')
			.del()
			.catch(function(error){
				throw {
					type: 'Database Error',
					message: 'Failed to create test setup data'
				}
			});
		});		
		it('should throw error when user does not exist', function(done){
			var req = {body:{}};
			var res = {json: function (argument) {}};
			var error = {};

			controller.signin(req,res,function (argument) {
				expect(argument.message).to.equal("user does not exist");
				done()
			});
		})
		it('should throw error when the password does not match', function(done){
			var req = {body:{username: 'test', password: 'wrong'}};
			var res = {json: function (argument) {}};
			var error = {};
			new User({
				'username': 'test',
				'password': 'test'
			}).save().then(function(){
				controller.signin(req,res,function (argument) {
					expect(argument.message).to.equal("No user");
					done()
				});	
			});
		});
		it('should send a response', function(done){
			var req = {body:{username: 'test', password: 'test'}};
			var error = {};
			var next = function () {
				
			};
			bcrypt.hash("test",null,null,function(err,hash){
				var newUser = new User({
					username: "test",
					password: hash
				});
				newUser.save().then(function(){
					controller.signin(
						req,
						{json: function (argument) {
								expect(argument.token).to.exist();
								done()
							   }
						},
						next);
				});
			});
		})
	});



// it('should sign in into database  with resopnes 200(Ok)',function(done){
// 	chai.request(server)
// 	.post('/api/signin')
// 	.send({
// 		username: 'test',
// 		password: 'test'
// 	})
// 	.end(function(error,res){
// 		res.should.have.status(200);
// 		res.body.should.be.a('object');
// 		done();
// 	});
// });

});

