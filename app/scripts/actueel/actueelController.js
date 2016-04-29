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

    $scope.$watch(function () {
      return pveService.getActueelConceptList();
    }, function (newVal) {
      $scope.conceptList = newVal;
    });

    $scope.$watch(function () {
      return pveService.getActueelVastgesteldList();
    }, function (newVal) {
      $scope.vastgesteldList = newVal;
    });

  });
