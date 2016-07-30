'use strict';

/**
 * @ngdoc directive
 * @name modulator2App.directive:stringBuilder
 * @description
 * # stringBuilder
 */
angular.module('modulator2App')
  .directive('stringBuilder', function () {
    return {
      restrict: 'E',
      scope: {},
      link: function postLink(scope, element) {
        element.text('this is the stringBuilder directive');
      },
       templateUrl: 'views/partials/string.html',
    };
  });
