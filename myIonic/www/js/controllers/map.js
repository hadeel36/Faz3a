angular.module('Faz3a.map' , ['ionic'])

.controller('MapController', function($scope, $window, Auth){
	$scope.myGoBack = function() {
	  $ionicHistory.goBack();
	};
	
	$scope.getCurrentUserPosition = function(){
	var id = $window.localStorage.getItem('user');
	console.log("id",id);
	Auth.getCurrentUserPosition(id)
	.then(function(data){
		$scope.position = data.data;
		console.log($scope.position[0]);
		var myLatLng = {
					lat: $scope.position[0].lat,
			    	lng: $scope.position[0].lng
			    };

	var marker = new google.maps.Marker({
          	position: new google.maps.LatLng(myLatLng.lat,myLatLng.lng),
          	map: $scope.map,
          	draggable: true
        	});

	}).catch(function(error){
		throw error;
		console.log(error);
	});
	}
	$scope.getCurrentUserPosition();

	$scope.getOwnerPosition = function(){
	var id = $window.localStorage.getItem('ownerId');
	console.log("id",id);
	Auth.getOwnerPosition(id)
	.then(function(data){
		$scope.ownerPosition = data.data;
		console.log($scope.ownerPosition[0]);
		var myLatLng = {
					lat: $scope.ownerPosition[0].lat,
			    	lng: $scope.ownerPosition[0].lng
			    };

	var marker = new google.maps.Marker({
          	position: new google.maps.LatLng(myLatLng.lat,myLatLng.lng),
          	map: $scope.map,
          	draggable: true
        	});

	}).catch(function(error){
		throw error;
		console.log(error);
	});
	}
	$scope.getOwnerPosition();

	var options = {
		zoom: 13,
		center: new google.maps.LatLng(31.971715, 35.8355179),
		mapTypeId: google.maps.MapTypeId.ROADMAP
	}
	$scope.map = new google.maps.Map(document.getElementById('map'), options);	
	
        });