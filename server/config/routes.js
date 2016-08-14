var controller = require('../DBcontrollers.js');
var helpers = require('./helpers.js');

module.exports = function (app, express) {
	app.post('/api/signin', controller.signin);
	app.post('/api/signup', controller.signup);

	app.get('/api/home', controller.viewLoans);
	app.post('/api/add', controller.addLoan);

	//  //app.post('/api/friends', helpers.decode, controller.addFriend);
	
	//  app.get('/api/notes', helpers.decode, controller.viewNotes);
	//  app.post('/api/notes', helpers.decode, controller.saveNote);
	
	// // app.post('/api/userprofile', helpers.decode, controller.addFriend);
	//  app.get('/api/userprofil', helpers.decode, controller.show);
	 
	// app.post('/user/notes',controller.saveNote);
    // app.post
	app.use(helpers.errorLogger);
	app.use(helpers.errorHandler);
};

