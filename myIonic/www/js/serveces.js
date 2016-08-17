var localURI = "http://localhost:8000";
var onlineURI = "http://faz3a-app.herokuapp.com";
angular.module('Faz3a.Servces' , [])

.factory('Auth',function($http, $location, $window){
	var signin = function(user){
		return $http({
			method: 'POST',
			url: localURI+'/api/signin',
			data: user
		}).then(function(res){
			return res.data;
		});
	};

	var signup = function(user){
		return $http({
			method: 'POST', 
			url: localURI+'/api/signup',
			data: user
		}).then(function(res){
			return res.data.token;
		});
	};

	var viewLoans = function(){
		return $http({
			method: 'GET',
			url: localURI+'/api/viewLoans'
		}).then(function(res){
			return res.data;
		});
	};

	var viewUsers = function(){
		console.log("hello");
		return $http({
			method: 'GET',
			url: localURI+'/api/viewUsers'
		}).then(function(res){
			return res.data;
		});
	};

	return {
		signin: signin,
		signup: signup,
		viewLoans: viewLoans,
		viewUsers: viewUsers
	};
});

