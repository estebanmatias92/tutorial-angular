'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('wwwApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should be empty at first', function () {
    expect(scope.tasks.length).toBe(0);
  });

  it('should add a task to the task list', function () {
    scope.task = 'Task 1';
    scope.addTask();

    expect(scope.tasks.length).toBe(1);
  });

  it('should remove a task from the task list', function () {
    scope.task = 'Task 1';
    scope.addTask();
    scope.removeTask(0);

    expect(scope.tasks.length).toBe(0);
  });
});
