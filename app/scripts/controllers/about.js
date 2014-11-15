'use strict';

/**
 * @ngdoc function
 * @name cersApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the cersApp
 */
angular.module('cersApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
