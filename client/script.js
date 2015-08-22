
var shareboardapp = angular.module('shareboardapp', ['ngRoute']);


shareboardapp.config(function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: './partials/landing.html'
  })
  .when('/login', {
    templateUrl: './partials/login.html'
  })
  .when('/lecture', {
    templateUrl: './partials/lecture.html'
  })
  // .when('/lecture', {
  //   redirectTo: './partial/lecture.html'
  // })
  .when('/lecture/:number', {
    templateUrl: './partials/lecture.html'
  })
  .when('/showlecture/:id', {
    templateUrl: './partials/showlecture.html'
  })
  .when('/about', {
    templateUrl: './partials/about.html'
  })
  .otherwise({
    redirectTo: '/'
  });
});
