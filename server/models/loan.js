var db = require('../DBconfig');

var Loan = db.Model.extend({
	tableName: 'loans',
	hasTimestamps: true
});

module.exports = Loan;

