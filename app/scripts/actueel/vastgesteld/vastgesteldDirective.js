"use strict";

angular
  .module('pveApp')
  .directive('vastgesteld', function (

  ) {
    return {
      restrict: 'A',
      templateUrl: './scripts/actueel/vastgesteld/vastgesteldView.html',
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
      }
    };
  });
