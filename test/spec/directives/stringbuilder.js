'use strict';

describe('Directive: stringBuilder', function () {

  // load the directive's module
  beforeEach(module('modulator2App'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<string-builder></string-builder>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the stringBuilder directive');
  }));
});
