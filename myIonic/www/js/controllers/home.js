angular.module('Faz3a.home' , ['ionic'])

.controller('HomeController', function($scope, Auth, $ionicModal, $location){

	$scope.viewLoans = function(){
		Auth.viewLoans()
		.then(function(data){
			$scope.loans = data.data;
		})
		.catch(function(error){
			throw error;
			console.log(error);
		});
	}
	$scope.viewLoans();

    $scope.viewUsers = function(){
        Auth.viewUsers()
        .then(function(data){
            $scope.users = data.data;
            console.log($scope.users);
        })
        .catch(function(error){
            throw error;
            console.log(error);
        });
    }
    $scope.viewUsers();

	 $ionicModal.fromTemplateUrl('image-modal.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function(modal) {
            $scope.modal = modal;
        });
        $scope.openModal = function() {
            $scope.modal.show();
        };
        $scope.closeModal = function() {
            $scope.modal.hide();
        };
        //Cleanup the modal when we're done with it!
        $scope.$on('$destroy', function() {
            $scope.modal.remove();
        });
        $scope.showImage = function() {
            $scope.imageSrc = "img/adam.jpg";
            $scope.openModal();
        }; 

    $scope.showMap = function(){
        $location.path('/map');
    };

    $scope.showUserProfile = function(){
        $location.path('/userProfile');
    };
});