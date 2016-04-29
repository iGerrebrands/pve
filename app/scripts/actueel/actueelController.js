"use strict";

angular
  .module('pveApp')
  .controller('ActueelController', function(
    $scope,
    pveService
  ) {
    $scope.title = "Actueel overzicht";

    $scope.conceptShow = true;
    $scope.toggleConceptShow = function () {
      $scope.conceptShow = !$scope.conceptShow;
    };

    $scope.vastgesteldShow = true;
    $scope.toggleVastgesteldShow = function () {
      $scope.vastgesteldShow = !$scope.vastgesteldShow;
    };

    $scope.actueelList = pveService.get

    $scope.vastgesteldList = [
      {
        title: 'PvE 8811',
        type: 'Onderhoud',
        date: '10 maart 2016'
      },
      {
        title: 'PvE 678',
        type: 'Beheer',
        date: '8 maart 2016'
      },
      {
        title: 'PvE 32',
        type: 'Onderhoud, Nieuwbouw',
        date: '5 februari 2016'
      }
    ];
  });
