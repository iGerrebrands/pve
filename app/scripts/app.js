'use strict';

/**
 * @ngdoc overview
 * @name pveApp
 * @description
 * # pveApp
 *
 * Main module of the application.
 */
angular
  .module('pveApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'scripts/main/main.html'
      })
      .when('/actueel', {
        templateUrl: 'scripts/actueel/actueelView.html',
        controller: 'ActueelController'
      })
      .when('/archief', {
        templateUrl: 'scripts/archief/archiefView.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
