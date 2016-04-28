"use strict";

angular
  .module('pveApp')
  .service('detailBoxService', function (

  ) {
    var active = null;
    this.displayData = null;

    this.setActive = function (newValue) {
      active = newValue;
    };

    this.getActive = function () {
      return active;
    };

    this.setDisplayData = function (data) {
      this.displayData = data;
    };

  });
