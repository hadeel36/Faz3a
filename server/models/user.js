var db = require('../DBconfig.js');
var Loan = require('./loan.js');

var User = db.Model.extend({
	tableName: 'users',
	hasTimestamps: true,

	loan: function(){
		return this.hasMany(Loan);
	}

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