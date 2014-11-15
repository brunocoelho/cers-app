'use strict';

/**
 * @ngdoc function
 * @name cersApp.controller:ExamCtrl
 * @description
 * # ExamCtrl
 * Controller of the cersApp
 */
angular.module('cersApp')
  .controller('ExamCtrl', function ($location, $routeParams, $scope, GradingService) {

    var answers = {},
        questions = [
          { title: 'Qual seu nome?', options: ['Bruno', 'João', 'Rodrigo', 'José'], id: 1, answer: 2 },
          { title: 'Onde você mora?', options: ['Recife', 'Olinda', 'Jaboatão', 'Caruaru'], id: 2, answer: 1 },
          { title: 'Onde você trabalha?', options: ['Liferay', 'Ubee', 'Cesar', 'Bemind'], id: 3, answer: 0 },
          { title: 'O que você gosta de fazer?', options: ['Surfar', 'Programar', 'Jogar bola', 'Ler'], id: 4, answer: 3 }
        ],
        currentQuestion = 0;

    $scope.question = questions[0];

    $scope.finishExam = function() {
      GradingService.questions = questions;
      GradingService.answers = answers;

      $location.path('/grading');
    };

    $scope.nextQuestion = function() {
      currentQuestion += 1;
      $scope.question = getQuestion(currentQuestion);
    };

    $scope.previousQuestion = function() {
      currentQuestion -= 1;
      $scope.question = getQuestion(currentQuestion);
    };

    $scope.saveAnswer = function(index) {
      answers[$scope.question.id] = index;
    };

    var getQuestion = function(currentQuestion) {
      var position = Math.abs(currentQuestion % questions.length);
      return questions[position];
    };

  });
