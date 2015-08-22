

shareboardapp.factory('usersFactory', function($http){
  var factory = {};
  var currentuser = 0;
  var lectures =[];

    factory.register = function(info, callback) {
        $http.post('/addUser', info).success(function(users) {
        callback(users);
       })
     }

   factory.login = function(info, callback){
     console.log('this is info', info);
     $http.post('/show', info).success(function(data) {
     callback(data);
     currentuser = data.name
     console.log(currentuser);
    })
   }

   factory.sendUserEmail = function(url, callback) {
      $http.post('/send', { content: url }).
        success(function(response) {
          console.log(response)
          callback(response)
        }
      )
   }


   factory.sendRequest = function(request,callback) {
     request.presenter = currentuser;
      $http.post('/sendRequest', request).success(function(response) {
          console.log(request)
          callback(response)
          console.log(response)
        }
      )
   }

   factory.addLecture = function(info, callback){
    info.username = currentuser;
      $http.post('/addLecture', info).success(function(data){
        callback(data);
        console.log(info);
    })
   }


    factory.addCustomer = function(info, callback) {
       $http.post('/add', info).success(function(customers) {
         callback(customers);
     })
   }

   factory.getusers = function(callback){
     callback(currentuser);
   }

   factory.getTitle = function(callback){
     callback(currenttitle);
   }

    factory.showlectures = function(callback){
         $http.post('/showlectures', {loggeduser: currentuser}).success(function(data){
           console.log(data);
           callback(data);
       })
     }

    return factory;
  })
