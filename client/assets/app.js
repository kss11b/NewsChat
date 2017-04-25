var app = angular.module('app', ['ngRoute','ngCookies']);

var socket = io.connect();

  app.config(function ($routeProvider){
    $routeProvider
    .when('/dash',{
      templateUrl: '/../partials/dash.html'
    })
    .when('/',{
      templateUrl: '../partials/main.html'
    })
    .when('/board',{
      templateUrl: '../partials/board.html'
    })
    .when('/show/:id',{
      templateUrl: '../partials/poll.html'
    })
    .otherwise({
      redirectTo: '/'
    });
  });
