angular.module('Faz3z.addLoan' , ['ionic'])

.controller('addLoanController', function($scope, Auth, $window, $timeout, $ionicHistory){

	$scope.images = {};

  $scope.myGoBack = function() {
    $ionicHistory.goBack();
  };

	$scope.addloan = function(){
		var temp = $window.localStorage.getItem('user');
		console.log(temp);
		$scope.loan.id = temp;
		Auth.addloan($scope.loan)
		.then(function(data){
			console.log("done");
		}).catch(function(error){
			throw error;
			console.log(error);
		});
		console.log($scope.loan)                                                                
	};

	$scope.upload = function() {
	console.log("hoooooo");
    //imgur id
    var  IMGUR_CLIENT_ID = 'e5483dd45cb276b';
    // upload to imgur function
    var uploadToIMGUR = function(client_id, imgData, callback) {
      $.ajax({
        url: 'https://api.imgur.com/3/image',
        headers: {
          'Authorization': 'Client-ID ' + client_id,
          'Accept': 'application/json'
        },
        type: 'POST',
        data: {
          'image': imgData,
          'type': 'base64'
        },
        success: function success(res) {
          if (callback) {
            callback(res.data);
          }
        }
      });
    };
  
    // git data from local machine and translate it to 64 base image
     var fileBt = $('<input>').attr('type','file');

     fileBt.on('change', function(){
      var file = fileBt[0].files[0];
      var reader = new FileReader();
      reader.addEventListener('load', function(){
        var imgData = reader.result.slice(23);
        // sending the decoded image to IMGUR to get a link for that image
        uploadToIMGUR(IMGUR_CLIENT_ID, imgData, function(result){
          $scope.loan.image = result.link;
          $scope.addloan();
          console.log($scope.loan.image);
        });
      })
      // using the reader to decode the image to base64
      reader.readAsDataURL(file);
    })
    fileBt.click();
   
  };
});