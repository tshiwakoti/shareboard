//Angular controller
shareboardapp.controller('login1', function($scope, $location, $routeParams,  usersFactory){

  $scope.id = $routeParams.id;

  $scope.theLecture;

  $scope.register = function(){
    usersFactory.register($scope.newUser, function(data){
    //  console.log($scope.users);
      $scope.users = data;
      $scope.newUser = {};
      $location.path('/')
    });
  };

  usersFactory.getusers(function(data){
    $scope.loguser = data[0];
  //  console.log(loguser);
  })

  usersFactory.getTitle(function(data){
    $scope.title = data[0];
  //  console.log($scope.title);
  })

  usersFactory.getAllLecture(function(data){
    $scope.lecture = data;
    console.log("All lecture data here");
    console.log(data);
  })

  $scope.addPresentation = function(){
    console.log($scope.newPresentation);
    usersFactory.addPresentation($scope.newPresentation, function(data){
      console.log($scope.newPresentation);
      $scope.presentations = data;
      console.log($scope.presentations);
      $location.url('/lecture');
    });
  };

  $scope.addAndSendLecture = function(data){
    var current_url = $location.$$absUrl
    console.log(data)
    console.log(current_url)

    usersFactory.sendUserEmail({ url: current_url, notes: data })
  }
  //
  // $scope.sendEmail = function() {
  //   // usersFactory.sendUserEmail(function(data) {
  //     console.log($location)
  //   // })
  // }


  $scope.sendEmail = function() {
    var current_url = $location.$$absUrl
    usersFactory.sendUserEmail({ url: current_url })
  }

  $scope.tolecture =function(id){
    var lectureId = "/chatroom/" + id;
    $location.path(lectureId);
  }

  usersFactory.showlectures( function(data){
    $scope.lectures = data;
    console.log($scope.lectures);
  })

  usersFactory.showlectures(function(data){
    for (var i = 0; i < data.length; i++) {
      if(data[i]._id === $scope.id) {
        $scope.theLecture = data[i];
      }
    }
  })

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
      $scope.loguser = data;

    })
  }
});
