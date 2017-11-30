'use strict';

/**
 * @ngdoc overview
 * @name uDirtyRatWebApp
 * @description
 * # uDirtyRatWebApp
 *
 * Main module of the application.
 */
angular.module('uDirtyRatWebApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'vm'
      })
      .when('/homePage', {
        templateUrl: 'views/homePage.html',
        controller: 'homePageCtrl',
        controllerAs: 'vm'
      })
      .when('/registration', {
        templateUrl: 'views/registration.html',
        controller: 'registrationCtrl',
        controllerAs: 'vm'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
