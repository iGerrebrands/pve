"use strict";

angular
  .module('pveApp')
  .directive('actueelConcept', function (
    detailBoxService
  ) {
    return {
      restrict: 'A',
      templateUrl: './scripts/actueel/concept/actueelConceptView.html',
      scope: {},
      link: function (
        scope
      ) {
        scope.actueelList = [
          {
            title: 'PvE 8888',
            type: 'Beheer',
            date: '17 maart 2016'
          },
          {
            title: 'PvE 5678',
            type: 'Beheer, Onderhoud',
            date: '17 maart 2016'
          },
          {
            title: 'PvE 3',
            type: 'Onderhoud, Nieuwbouw',
            date: '18 februari 2016'
          }
        ];

        scope.setDetails = function (item) {
          detailBoxService.setDisplayData(item);
          detailBoxService.setActive('pve');
        };
      }
    };
  });
