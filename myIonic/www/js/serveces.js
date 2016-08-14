var localURI = "http://localhost:8000";
var onlineURI = "https://faz3a-app.herokuapp.com";
angular.module('Faz3a.Servces' , [])

.factory('Auth',function($http, $location, $window){
	var signin = function(user){
		return $http({
			method: 'POST',
			url: onlineURI+'/api/signin',
			data: user
		}).then(function(res){
			return res.data;
		});
	};

	var signup = function(user){
		return $http({
			method: 'POST',
			url: onlineURI+'/api/signup',
			data: user
		}).then(function(res){
			return res.data.token;
		});
	};

	var viewLoans = function(){
		return $http({
			method: 'GET',
			url: onlineURI+'/api /home'
		}).then(function(res){
			return res.data;
		});
	}

	return {
		signin: signin,
		signup: signup,
		viewLoans: viewLoans
	};
});

