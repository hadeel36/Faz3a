angular.module('Faz3a.index' , ['ionic'])

.controller('menuController' , function($scope, $ionicSideMenuDelegate){
	$scope.doSomething = function(){
		$ionicSideMenuDelegate.toggleLeft();
	}
});