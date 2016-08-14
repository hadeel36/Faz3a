angular.module('Faz3a.Auth' , ['ionic'])

.controller('Authcontroller' , function($scope ,$window, $location, Auth){
	$scope.user = {};
	var username = '';
	$scope.signin = function(){
		Auth.signin($scope.user)
		.then(function(data){
			$window.localStorage.setItem('session',data.token);
			$location.path('/home');
		})
		.catch(function(error){
			throw error;
			console.log(error);
		});
	};

	$scope.signup = function(){
		Auth.signup($scope.user)
		.then(function(data){
			$window.localStorage.setItem('session',data.token);
			$location.path('/home');
		})
		.catch(function(error){
			throw error;
			console.log(error);
		});
	}

});