require('../../bower_components/angular/angular');
require('../../bower_components/angular-ui-router/release/angular-ui-router');
require('../../bower_components/restangular/dist/restangular');
require('../../bower_components/angular-bootstrap/ui-bootstrap')
// App definition
var myApp = angular.module('koh', ['ui.router', 'restangular', 'ui.bootstrap']);

// Controllers
require('./controllers/todo/TodoCtrl');
require('./controllers/users/UserCtrl');

// Injectable Modules
var helpers = function () { return require('./libs/helpers'); };

// App Config
myApp.config(function($stateProvider, $urlRouterProvider, $locationProvider, RestangularProvider) {
  // End point we created  
  RestangularProvider.setBaseUrl('http://192.168.1.106:8000/api')

  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/");

  // TODO: Fix broken 404
  $locationProvider.html5Mode(true);
  
  // Now set up the states
  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "/controllers/todo/todo.html",
      controller: 'TodoCtrl',
      resolve: {
      	helpers: helpers
      }
    })
    .state('users', {
      url: "/users",
      templateUrl: "/controllers/users/users.html",
      controller: 'UserCtrl',
      resolve: {
      	helpers: helpers
      }
    })
});
