"use strict";

angular
  .module('pveApp')
  .service('pveService', function (
    detailBoxService
  ) {
    var actueelConceptList = [
      {
        id: 0,
        title: 'PvE 8888',
        type: 'Beheer',
        date: '17 maart 2016',
        desc: 'ddddddddd',
        number: 'PvE 22323',
        contract: 'UAV-gc'
      },
      {
        id: 1,
        title: 'PvE 5678',
        type: 'Beheer, Onderhoud',
        date: '17 maart 2016',
        desc: 'dddddd',
        number: 'PvE 22323',
        contract: 'UAV-gc'
      }
    ];
    var actueelVastgesteldList = [
      {
        id: 4,
        title: 'PvE 8811',
        type: 'Onderhoud',
        date: '10 maart 2016',
        desc: 'dddddddd',
        number: 'PvE 22323',
        contract: 'UAV-gc'
      },
      {
        id: 5,
        title: 'PvE 678',
        type: 'Beheer',
        date: '8 maart 2016',
        desc: 'dddddd',
        number: 'PvE 22323',
        contract: 'UAV-gc'
      }
    ];

    this.addActueelConcept = function (item) {
      actueelConceptList.push(item);
    };

    this.addActueelVastgesteld = function (item) {
      actueelVastgesteldList.push(item);
    };

    this.getActueelConceptList = function () {
      // TODO: API CALL
      return actueelConceptList;
    };

    this.getActueelVastgesteldList = function () {
      // TODO: API CALL
      return actueelVastgesteldList;
    };

    this.setDetails = function (item) {
      resetActiveStates();
      item.active = true;
      detailBoxService.setDisplayData(item);
      detailBoxService.setActive('pve');
    };

    var resetActiveStates = function () {
      var allLists = actueelConceptList.concat(actueelVastgesteldList);

      _.each(allLists, function (item) {
        item.active = false;
      });
    };
  });
