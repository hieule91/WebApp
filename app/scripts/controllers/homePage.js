(function () {
  'use strict';

  /**
   * @ngdoc function
   * @name uDirtyRatWebApp.controller:AboutCtrl
   * @description
   * # AboutCtrl
   * Controller of the uDirtyRatWebApp
   */
  angular.module('uDirtyRatWebApp')
    .controller('homePageCtrl', function ($scope, $location) {
      this.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS'
      ];

        var vm = this;

        vm.newRat = function () {
            $location.path('/newRat');
        };

        vm.reports = function () {
            $location.path('/reports');
        };

        vm.map = function () {
            $location.path('/map');
        };

        vm.graph = function () {
            $location.path('/graph');
        };

    });
})();
