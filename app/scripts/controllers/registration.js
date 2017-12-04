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
    .controller('registrationCtrl', function ($scope, $location) {
      this.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS'
      ];

        var vm = this;

      vm.userName = '';
      vm.password = '';

      vm.submit = function () {
        $location.path('/homePage');
      };
    });

})();
