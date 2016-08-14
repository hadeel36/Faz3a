angular.module('Faz3a.home' , ['ionic'])

.controller('HomeController', function($scope, Auth){
	$scope.loans = {};

	$scope.viewLoans = function(){
		Auth.viewLoans()
		.then(function(data){
			$scope.loans.all = data;
		})
		.catch(function(error){
			throw error;
			console.log(error);
		});
	}
});