var localURI = "http://localhost:8000";
angular.module('Faz3a.Servces' , [])

.factory('Auth',function($http, $location, $window){
	var signin = function(user){
		return $http({
			method: 'POST',
			url: localURI + '/api/signin',
			data: user
		}).then(function(res){
			return res.data;
		});
	};

	var singup = function(user){
		return $http({
			method: 'POST',
			url: localURI + '/api/singup',
			data: user
		}).then(function(res){
			return res.data.token;
		});
	};

	return {
		signin: signin,
		singup: singup
	};
});

