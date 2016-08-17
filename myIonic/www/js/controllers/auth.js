angular.module('Faz3a.Auth' , ['ionic'])

.controller('Authcontroller' , function($scope ,$window, $location, Auth){
	$scope.user = {};
	$scope.lat = 0;
	$scope.lng = 0;
  ////this function checks if the user exist and return the token
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
		if(navigator.geolocation){
			navigator.geolocation.getCurrentPosition(function(position){
				$scope.user.lat = position.coords.latitude;
				$scope.user.lng = position.coords.longitude;
				Auth.signup($scope.user)
				.then(function(data){
				$window.localStorage.setItem('session',data.token);
				$location.path('/home');
			})
				.catch(function(error){
					throw error;
					console.log(error);
				});
		});
		}else{
			// Browser doesn't support Geolocation
			alert('your Browser dose not support the geolocation');
		}
	}
});