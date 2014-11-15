'use strict';

/**
 * @ngdoc service
 * @name cersApp.QuestionAnswerShareService
 * @description
 * # QuestionAnswerShareService
 * Factory in the cersApp.
 */
angular.module('cersApp')
  .factory('GradingService', function () {
    return {
      answers: [],
      questions: []
    };
  });
