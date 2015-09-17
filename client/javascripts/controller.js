//Angular controller
shareboardapp.controller('login1', function($scope, $location, $routeParams,  usersFactory){

  $scope.id = $routeParams.id;

  $scope.theLecture;

  $scope.register = function(){
    //console.log($scope.newUser);
    if ($scope.newUser.name === ''|| !$scope.newUser.name)
    {
      //console.log("testtasfdasdfnaslkdfaskdflasdfasf");
      $scope.error = "Name Cannot be Blank";
    }
    else if ($scope.newUser.email === ''|| !$scope.newUser.email)
      {
        //console.log("testtasfdasdfnaslkdfaskdflasdfasf");
        $scope.error = "Email Cannot be Blank";
      }
    else if ($scope.newUser.password === ''|| !$scope.newUser.password)
      {
        //console.log("testtasfdasdfnaslkdfaskdflasdfasf");
        $scope.error = "Password Cannot be Blank";
      }
    else{
    usersFactory.register($scope.newUser, function(data){
    //  console.log($scope.users);


      $scope.users = data;
      $scope.newUser = {};
      $location.path('/login')
    });
  }
};

  usersFactory.getusers(function(data){
    $scope.loguser = data;
    //console.log(loguser);
  })

  $scope.addLecture = function(){
    var test = document.getElementById('textarea1').innerHTML;
    console.log(test);
    console.log($scope.lecture.body);
    $scope.lecture.lecture = test;
  //  console.log($scope.newPresentation);
    usersFactory.addLecture($scope.lecture, function(data){
      console.log($scope.lecture);
      $scope.lecture = data;
      // console.log($scope.presentations);
      $location.url('/lecture');
    });
  };

   var randomNumber = Math.floor(100000 + Math.random() * 900000);

  var url = $location.$$absUrl.concat('/')
  var current_url = url.concat(randomNumber);
  console.log(current_url);

  $scope.sendRequest = function(){
    $scope.lecture.current_url = current_url;
    usersFactory.sendRequest($scope.lecture, function(data){
      $scope.lecture = data;
      console.log($scope.lecture);
    })
  }

  $scope.tolecture =function(id){
    var lectureId = "/showlecture/" + id;
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
      if(!data)
      {
        $scope.error1 = "User doesn't exists. Please sign up. "
      }

      if(data.usercheck === 'success')
      {
        $scope.error1 = "User logged in";
        $location.path("/lecture");
      }

      else if(data.usercheck === 'invalid')
      {
        $scope.error1 = "Password didn't match. Please try again. ";
      }
      $scope.loguser = data;

    })
  }
});
