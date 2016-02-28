'use strict';

/**
 * @ngdoc function
 * @name ejemploApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the ejemploApp
 */
angular.module('ejemploApp')
  .controller('HomeCtrl', [
    '$rootScope',
    'prueba',
    'pruebaService',
    HomeCtrl
  ]);

function HomeCtrl($rootScope, prueba, pruebaService) {
  var homeVm = this;

  homeVm.global = $rootScope.global;

  homeVm.heroes = prueba.listaHeroes;

  function addHeroe() {
    prueba.listaHeroes.push(
      {id: 8, name: 'Giovanny'}
    );
  }

  homeVm.addHeroe = pruebaService.addHeroe;
  
}
