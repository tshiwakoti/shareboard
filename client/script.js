
var shareboardapp = angular.module('shareboardapp', ['ngRoute']);


shareboardapp.config(function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: './partials/landing.html'
  })
  .when('/login', {
    templateUrl: './partials/login.html'
  })
  .when('/shareboard', {
    templateUrl: './partials/shareboard.html'
  })
  .when('/lecture', {
    templateUrl: './partials/lecture.html'
  })
  .when('/chatroom/:id', {
    templateUrl: './partials/chatroom.html'
  })
  .when('/about', {
    templateUrl: './partials/about.html'
  })
  .otherwise({
    redirectTo: '/'
  });
});
