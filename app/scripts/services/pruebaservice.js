'use strict';

/**
 * @ngdoc service
 * @name ejemploApp.pruebaService
 * @description
 * # pruebaService
 * Service in the ejemploApp.
 */
angular.module('ejemploApp')
  .service('pruebaService', [
    'prueba',
    function (prueba) {
    this.addHeroe = function() {
      prueba.listaHeroes.push(
	{id: 1, name: 'super man'}
      );
    }
  }]);
