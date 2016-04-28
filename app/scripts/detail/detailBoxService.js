"use strict";

angular
  .module('pveApp')
  .service('detailBoxService', function (

  ) {
    var active = null;
    var displayData = null;

    this.setActive = function (newValue) {
      active = newValue;
    };

    this.getActive = function () {
      return active;
    };

    this.setDisplayData = function (data) {
      displayData = data;
    };

    this.getData = function () {
      return displayData;
    };

  });
