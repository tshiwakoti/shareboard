//Angular controller



shareboardapp.controller('login1', function($scope, $location, usersFactory){

  $scope.register = function(){
    usersFactory.register($scope.newUser, function(data){
    //  console.log($scope.users);
      $scope.users = data;
      $scope.newUser = {};
      $location.path('/')
    });
  };


  $scope.login = function(){
    usersFactory.login($scope.userlogin, function(data){
      // console.log(data.success);
      if(data == null)
      {
        console.log("NO user");
      }

      if(data.usercheck === 'success')
      {
        $location.path("/shareboard");
      }

      else if(data.usercheck === 'invalid')
      {
        console.log("Password didn't match");
      }
      $scope.users = data;
      console.log(data);

      $scope.userlogin = {};

    })
  }




});
