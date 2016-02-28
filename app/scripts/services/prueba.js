'use strict';

/**
 * @ngdoc service
 * @name ejemploApp.prueba
 * @description
 * # prueba
 * Factory in the ejemploApp.
 */
angular.module('ejemploApp')
  .factory('prueba', function () {
    
    var datosCompartidos = {
      listaHeroes: [
	{id: 0, name: 'iron man'},
	{id: 1, name: 'batman'}
      ]
    };

    
    return datosCompartidos;
  });
