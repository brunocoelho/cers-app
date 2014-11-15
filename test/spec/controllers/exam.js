'use strict';

describe('Controller: ExamCtrl', function () {

  // load the controller's module
  beforeEach(module('cersApp'));

  var ExamCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ExamCtrl = $controller('ExamCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
