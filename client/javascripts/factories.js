
//users factory


shareboardapp.factory('usersFactory', function($http){
  var factory = {};
  var users = [];
  var currenttitle = [];
  var participants = [];
  var alllecture = [];

  //var titles = [];

  factory.register = function(info, callback) {
      console.log(info);
      $http.post('/addUser', info).success(function(users) {
      callback(users);
     })
   }

   factory.login = function(info, callback){
    // console.log(info);
     $http.post('/show', info).success(function(data) {
     callback(data);
     users.push(data.name);
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

   factory.addPresentation = function(info, callback){
     info.name = users[0];
     participants.push[info.participants]
     //console.log(info);
     currenttitle.push(info.title);
    console.log(info);
    callback({currenttitle: info.title});
   }

   factory.getusers = function(callback){
     callback(users);
   }

   factory.getTitle = function(callback){
     callback(currenttitle);
   }

   factory.getAllLecture = function(callback){
     callback(alllecture);
   }



   //lecture
   factory.addLecture = function(info, callback){
     info.username = users[0];
     info.currenttitle = currenttitle[0];
     info.participants = participants;
     console.log(info);
     $http.post('/addLecture', info).success(function(data){
       callback(data);
     })
   }


     factory.showlectures = function(callback){
       $http.get('/showlectures').success(function(data){
         console.log(data);
        alllecture.push(data);
        callback(data);
        //console.log(data);
     })
   }




   return factory;
})
