var db = require('../config');

var Loan = db.Model.extend({
	tableName: 'loans',
	hasTimestamps: true
});

module.exports = Loan;

