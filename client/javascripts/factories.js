shareboardapp.factory('usersFactory', function($http){
  var factory = {};
  var users = [];


  factory.register = function(info, callback) {
      console.log(info);
      $http.post('/addUser', info).success(function(users) {
      callback(users);
     })
   }

   factory.login = function(info, callback){
     console.log(info);
     $http.post('/show', info).success(function(users) {
     callback(users);
    })
   }

   return factory;
})
