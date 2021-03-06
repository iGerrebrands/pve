"use strict";

angular
  .module('pveApp')
  .directive('detailBox', function (
    detailBoxService
  ) {
    return {
      restrict: 'A',
      templateUrl: './scripts/detail/detailBoxView.html',
      scope: {},
      link: function (
        scope
      ) {
        scope.$watch(function () {
          return detailBoxService.getActive()
        },function (newVal) {
            scope.active = newVal;
        });

        scope.$watch(function () {
          return detailBoxService.getData();
        }, function (newVal) {
          scope.displayData = newVal;
        });
      }
    };
  });
