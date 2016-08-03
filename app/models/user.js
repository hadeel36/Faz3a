var db = require('../config');
var Loan = require('./loan');

var User = db.Model.extend({
	tableName: 'users',
	hasTimestamps: true,

	loan: function(){
		return this.hasMany(Loan);
	}

});

module.exports = User;