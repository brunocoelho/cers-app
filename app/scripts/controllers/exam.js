'use strict';

/**
 * @ngdoc function
 * @name cersApp.controller:ExamCtrl
 * @description
 * # ExamCtrl
 * Controller of the cersApp
 */
angular.module('cersApp')
  .controller('ExamCtrl', function ($scope, $routeParams) {

    var questions = [
      { title: 'Qual seu nome?', options: ['Bruno', 'João', 'Rodrigo', 'José'], id: 1 },
      { title: 'Onde você mora?', options: ['Recife', 'Olinda', 'Jaboatão', 'Caruaru'], id: 2 },
      { title: 'Onde você trabalha?', options: ['Liferay', 'Ubee', 'Cesar', 'Bemind'], id: 3 },
      { title: 'O que você gosta de fazer?', options: ['Surfar', 'Programar', 'Jogar bola', 'Ler'], id: 4 }
    ],
    currentQuestion = 0;

    $scope.question = questions[0];

    $scope.finishExam = function() {};

    $scope.nextQuestion = function() {
      currentQuestion += 1;
      $scope.question = getQuestion(currentQuestion);
    };

    $scope.previousQuestion = function() {
      currentQuestion -= 1;
      $scope.question = getQuestion(currentQuestion);
    };

    var getQuestion = function(currentQuestion) {
      var position = Math.abs(currentQuestion % questions.length);
      return questions[position];
    }
  });
