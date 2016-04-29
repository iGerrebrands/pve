"use strict";

angular
  .module('pveApp')
  .directive('pveList', function (
    detailBoxService,
    pveService
  ) {
    return {
      restrict: 'A',
      templateUrl: './scripts/pve/pveListView.html',
      scope: { items: '='},
      link: function (
        scope
      ) {

        scope.setDetails = function (item) {
          pveService.setDetails(item);
        };

      }
    }
  });
