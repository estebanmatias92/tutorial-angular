'use strict';

/**
 * @ngdoc function
 * @name wwwApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the wwwApp
 */
angular.module('wwwApp')
  .controller('MainCtrl', function ($scope, localStorageService) {
    var storedTasks = localStorageService.get('tasks');

    $scope.tasks = storedTasks && storedTasks.split('\n') || [];

    $scope.$watch('tasks', function () {
        localStorageService.add('tasks', $scope.tasks.join('\n'));
    }, true);


    $scope.addTask = function () {
        $scope.tasks.push($scope.task);
        $scope.cleanInput();
    };

    $scope.cleanInput = function () {
        $scope.task = '';
    };

    $scope.removeTask = function (index) {
        $scope.tasks.splice(index, 1);
    };

    $scope.sortableOptions = {
        handle: '> .task-content',
        cancel: ''
    };

  });
