'use strict';

/**
 * @ngdoc function
 * @name cersApp.controller:GradingCtrl
 * @description
 * # GradingCtrl
 * Controller of the cersApp
 */
angular.module('cersApp')
  .controller('GradingCtrl', function ($scope, GradingService) {

    console.log(GradingService.answers);
    console.log(GradingService.questions);

    $scope.answers = GradingService.answers;
    $scope.questions = GradingService.questions;

    $scope.isCorrect = function(question) {
      if (question !== undefined) {
        return $scope.answers[question.id] === question.answer;
      }
    };

    $scope.questionList = Object.keys(GradingService.questions);
  });
