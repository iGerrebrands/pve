"use strict";

angular
  .module('pveApp')
  .controller('ActueelController', function(
    $scope
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
  });

/**
 * Created by ian on 28-4-2016.
 */
