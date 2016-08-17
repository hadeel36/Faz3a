angular.module('Faz3a.map' , ['ionic'])

.controller('MapController', function($scope){
	var options = {
		zoom: 13,
		center: new google.maps.LatLng(31.971715, 35.8355179),
		mapTypeId: google.maps.MapTypeId.ROADMAP
	}
$scope.map = new google.maps.Map(document.getElementById('map'), options);	
var myLatLng = {lat: 31.971715,
			    lng: 35.8355179};

var marker = new google.maps.Marker({
          position: myLatLng,
          map: map,
          title: 'Hello World!'
        });
marker.setMap(map);
});