'use strict';

describe('Service: GradingService', function () {

  // load the service's module
  beforeEach(module('cersApp'));

  // instantiate service
  var QuestionAnswerShareService;
  beforeEach(inject(function (_GradingService_) {
    GradingService = _GradingService_;
  }));

  it('should do something', function () {
    expect(!!GradingService).toBe(true);
  });

});
