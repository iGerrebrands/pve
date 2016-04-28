"use strict";

angular
  .module('pveApp')
  .directive('pveListItem', function () {
      return {
        restrict: 'A',
        templateUrl: './scripts/pve/pveListItemView.html',
        scope: { item: '=' },
        link: function (scope) {
          
        }
      }
  });
