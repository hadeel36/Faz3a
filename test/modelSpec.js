var expect = require ('chai').expect;
var db = require('../server/DBconfig.js');
var User = require('../server/models/user.js');
var knex = require('knex');
var Loan = require('../server/models/loan.js');

describe('User Model' , function(){
	it('User Model should be User Model' , function(){
		expect(new User()).to.be.instanceOf(db.Model);
	});

	it('should have a schema' , function() {
		expect(db.knex.schema).to.exist;
	});
});


describe('Loan Model' , function(){
	it('Loan Model should be Loan Model' , function(){
		expect(new Loan()).to.be.instanceOf(db.Model);
	});

	it('should have a schema' , function(){
		expect(db.knex.schema).to.expect;
	});
});
