'use strict';

/**
 * @ngdoc overview
 * @name ejemploApp
 * @description
 * # ejemploApp
 *
 * Main module of the application.
 */
angular
  .module('ejemploApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ]);

angular.module('ejemploApp')
  .run(function($rootScope) {
    $rootScope.global = 'hola';
  });


