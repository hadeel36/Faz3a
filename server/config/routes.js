var controller = require('../DBcontrollers.js');
var helpers = require('./helpers.js');

module.exports = function (app, express) {
	app.post('/api/signin', controller.signin);
	app.post('/api/signup', controller.signup);
	app.get('/api/viewLoans/:id', controller.viewLoans);

	app.get('/api/viewUsers', controller.viewUsers);
	app.post('/api/addloan', controller.addLoan);
	app.post('/api/lend', controller.lend);

	app.get('/api/viewBorrowedItem/:id', controller.viewBorrowedItem);
	app.get('/api/viewLend/:id', controller.viewLend);
	app.post('/api/deleteLoan/:id', controller.deleteLoan);

	app.post('/api/activeLoan/:id', controller.activeLoan);
	app.post('/api/deactiveLoan/:id', controller.deactiveLoan);
	app.get('/api/getCurrentUserPosition/:id', controller.getCurrentUserPosition);

	app.get('/api/getOwnerPosition/:id', controller.getOwnerPosition);
	app.post('/api/upload', controller.upload);
	
	app.use(helpers.errorLogger);
	app.use(helpers.errorHandler);
};

