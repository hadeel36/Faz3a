var expect =  require('chai').expect;
var request = require('request');
var db = require('../server/DBconfig.js');
var User = require('../server/models/user.js');
var Loan = require('../server/models/loan.js');

var should = chai.should();
chai.use(chaiHttp);
