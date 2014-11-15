'use strict';

/**
 * @ngdoc function
 * @name cersApp.controller:StageCtrl
 * @description
 * # StageCtrl
 * Controller of the cersApp
 */
angular.module('cersApp')
  .controller('StageCtrl', function ($scope, $location) {

    $scope.exams = [
      { title: 'Normal de 80 questões', id: 1 },
      { title: 'Avançado de 100 questões', id: 2 }
    ];

    $scope.loadExam = function(id) {
      $location.path("/exam/" + id);
    }

  });
