'use strict';

/**
 * @ngdoc function
 * @name cersApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cersApp
 */
angular.module('cersApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
