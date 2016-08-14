var db = require('../DBconfig.js');
var Loan = require('./loan.js');
//var bcrypt = require('bcrypt-nodejs');
//var Promise = require('bluebird');

var User = db.Model.extend({
	tableName: 'users',
	hasTimestamps: true,

	loan: function(){
		return this.hasMany(Loan);
	}

	// initialize: function() {
 //    this.on('creating', this.hashPassword, this);
 //  },
 //  hashPassword: function(model, attrs, options) {
 //    return new Promise(function(resolve, reject) {
 //      bcrypt.hash(model.attributes.password, 10, function(err, hash) {
 //        if( err ) reject(err);
 //        model.set('password', hash);
 //        resolve(hash); // data is created only after this occurs
 //      });
 //    });
 //  }

// initialize: function() {
//     this.on('creating', this.hashPassword, this);
//   },

//   hashPassword: function(model, attrs, options) {
//     bcrypt.hash(model.attributes.password, 10, function(err, hash) {
//       if( err ) throw err;
//       model.set('password', hash);
//     });
//   }

});

module.exports = User;