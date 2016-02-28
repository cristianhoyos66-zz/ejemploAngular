'use strict';

/**
 * @ngdoc function
 * @name ejemploApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ejemploApp
 */
angular.module('ejemploApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
