angular.module('Faz3z.Profile' , ['ionic'])

.controller('userProfileController', function($scope, Auth){

	$scope.viewUsers = function(){
		Auth.viewUsers()
		.then(function(data){
			$scope.users = data.data;
		})
		.catch(function(error){
			throw error;
			console.log(error);
		});
	}
});