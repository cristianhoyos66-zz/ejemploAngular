'use strict';

describe('Service: prueba', function () {

  // load the service's module
  beforeEach(module('ejemploApp'));

  // instantiate service
  var prueba;
  beforeEach(inject(function (_prueba_) {
    prueba = _prueba_;
  }));

  it('should do something', function () {
    expect(!!prueba).toBe(true);
  });

});
