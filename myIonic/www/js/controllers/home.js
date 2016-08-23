angular.module('Faz3a.home' , ['ionic'])

.controller('HomeController', function($scope, Auth, $ionicModal, $location, $window){
    $scope.myGoBack = function() {
      $ionicHistory.goBack();
    };
	$scope.viewLoans = function(){
        var id = $window.localStorage.getItem('user');
        console.log(id);
		Auth.viewLoans(id)
		.then(function(data){
			$scope.loans = data.data;
            console.log('loans',$scope.loans);
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
        })
        .catch(function(error){
            throw error;
            console.log(error);
        });
    }
    $scope.viewUsers();

    $scope.lend = function(index){
        $scope.loans[index].active = false;
        $scope.loans[index].lend = true;
        $scope.loans[index].borrowedperson = $window.localStorage.getItem('user');
        Auth.lend($scope.loans[index])
        .then(function(loan){
            console.log(loan);
        }).catch(function(error){
            throw error;
            console.log(error);
        });
    }

    $scope.viewBorrowedItem = function(){
        var id = $window.localStorage.getItem('user');
        Auth.viewBorrowedItem(id)
        .then(function(data){
            $scope.borroweditem = data.data;
        }).catch(function(error){
            throw error;
            console.log(error);
        });
    }
    $scope.viewBorrowedItem();

    $scope.viewLend = function(){
        var id = $window.localStorage.getItem('user');
        Auth.viewLend(id)
        .then(function(data){
            $scope.lends = data.data;
            console.log($scope.lends);
        }).catch(function(error){
            throw error;
            console.log(error);
        });
    }
    $scope.viewLend();

    $scope.deleteLoan = function(lend){
        console.log(lend);
        var id = lend.id;
        Auth.deleteLoan(id, lend)
        .then(function(data){
            console.log(id);
        }).catch(function(error){
            throw error;
            console.log(error);
        });
    }

    $scope.activeLoan = function(lend){
        if(lend.active === true){
            alert("its already activated");
        }else{
            var id = lend.id;
            lend.active = true;
            Auth.activeLoan(id, lend)
            .then(function(data){
                console.log(data);
             }).catch(function(error){
                throw error;
                console.log(error);
            });
        }
    }

    $scope.deactiveLoan = function(lend){
        if(lend.lend === false){
            alert("its already deactivated");
        }else{
            var id = lend.id;
            lend.lend = false;
            Auth.deactiveLoan(id, lend)
            .then(function(data){
                console.log(data);
            }).catch(function(error){
                throw error;
                console.log(error);
            });
        }
    }

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

    $scope.showMap = function(id){
        var ownerId = id;
        console.log("owner",ownerId);
        $window.localStorage.setItem('ownerId',ownerId);
        $location.path('/map');
    };

    $scope.showUserProfile = function(){
        $location.path('/userProfile');
    };
});