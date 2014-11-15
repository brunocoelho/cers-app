'use strict';

/**
 * @ngdoc overview
 * @name cersApp
 * @description
 * # cersApp
 *
 * Main module of the application.
 */
angular
  .module('cersApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/stage', {
        templateUrl: 'views/stage.html',
        controller: 'StageCtrl'
      })
      .when('/exam/:id', {
        templateUrl: 'views/exam.html',
        controller: 'ExamCtrl'
      })
      .when('/grading', {
        templateUrl: 'views/grading.html',
        controller: 'GradingCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
