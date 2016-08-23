var localURI = "http://localhost:8000";
var onlineURI = "http://faz3a-app.herokuapp.com";
angular.module('Faz3a.Servces' , [])

.factory('Auth',function($http, $location, $window){
	var signin = function(user){
		return $http({
			method: 'POST',
			url: onlineURI+'/api/signin/',
			data: user
		}).then(function(res){
			return res.data;
		});
	};

	var signup = function(user){
		return $http({
			method: 'POST', 
			url:onlineURI+'/api/signup',
			data: user
		}).then(function(res){
			return res.data;
		});
	};

	var addloan = function(loan){
		return $http({
			method: 'POST',
			url: onlineURI+'/api/addloan',
			data: loan
		}).then(function(res){
			return res.data;
		});
	};

	var viewLoans = function(id){
		return $http({
			method: 'GET',
			url: onlineURI+'/api/viewLoans/'+id
		}).then(function(res){
			return res.data;
		});
	};

	var viewUsers = function(){
		return $http({
			method: 'GET',
			url: onlineURI+'/api/viewUsers'
		}).then(function(res){
			return res.data;
		});
	};

	var lend = function(data){
		return $http({
			method: 'POST',
			url: onlineURI+'/api/lend',
			data: data
		}).then(function(res){
			return res.data;
		});
	};

	var viewBorrowedItem = function(id){
		return $http({
			method: 'GET',
			url: onlineURI+'/api/viewBorrowedItem/'+id
		}).then(function(res){
			return res.data;
		});
	};

	var viewLend = function(id){
		return $http({
			method: 'GET',
			url: onlineURI+'/api/viewLend/'+id
		}).then(function(res){
			return res.data;
		});
	};

	var deleteLoan = function(id, data){
		return $http({
			method: 'POST',
			url: onlineURI+'/api/deleteLoan/'+id,
			data: data
		}).then(function(res){
			return res.data;
		});
	};

	var activeLoan = function(id, data){
		return $http({
			method: 'POST',
			url: onlineURI+'/api/activeLoan/'+id,
			data: data
		}).then(function(res){
			return res.data;
		});
	};

	var deactiveLoan = function(id, data){
		return $http({
			method: 'POST',
			url: onlineURI+'/api/deactiveLoan/'+id,
			data: data
		}).then(function(res){
			return res.data;
		});
	};

	var getCurrentUserPosition = function(id){
		return $http({
			method: 'GET',
			url: onlineURI+'/api/getCurrentUserPosition/'+id
		}).then(function(res){
			return res.data;
		});
	};

	var getOwnerPosition = function(id){
		return $http({
			method: 'GET',
			url: onlineURI+'/api/getOwnerPosition/'+id
		}).then(function(res){
			return res.data;
		});
	};

	var upload = function(image){
		return $http({
			method: 'POST',
			url: onlineURI+'/api/upload',
			data: image
		}).then(function(res){
			return res.image;
		});
	};

	return {
		signin: signin,
		signup: signup,
		addloan: addloan,
		viewLoans: viewLoans,
		viewUsers: viewUsers,
		lend: lend,
		viewBorrowedItem: viewBorrowedItem,
		viewLend: viewLend,
		deleteLoan: deleteLoan,
		activeLoan: activeLoan,
		deactiveLoan: deactiveLoan,
		getCurrentUserPosition: getCurrentUserPosition,
		getOwnerPosition: getOwnerPosition,
		upload: upload
	};
});

