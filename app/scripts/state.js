'use strict';

angular.module('ejemploApp')
  .config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
      $urlRouterProvider
      	.when('/home', '/')
	.otherwise('/');

      $stateProvider

	.state('auth', {
	  abstract: true,
	  url: '',
	  templateUrl: 'views/auth.html',
	  controller: 'AuthCtrl as authVm',
	})

      	.state('auth.home', {
	  url: '/',
	  templateUrl: 'views/home.html',
	  controller: 'HomeCtrl as homeVm',
	});

    }
  ])
