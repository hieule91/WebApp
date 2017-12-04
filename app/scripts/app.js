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
        .when('/reports', {
            templateUrl: 'views/reports.html',
            controller: 'reportsController',
            controllerAs: 'vm'
        })
        .when('/newRat', {
            templateUrl: 'views/newRat.html',
            controller: 'newController',
            controllerAs: 'vm'
        })
        .when('/map', {
            templateUrl: 'views/map.html',
            controller: 'mapController',
            controllerAs: 'vm'
        })
        .when('/graph', {
            templateUrl: 'views/graph.html',
            controller: 'graphController',
            controllerAs: 'vm'
        })

        .otherwise({
            redirectTo: '/'
        });
  });
