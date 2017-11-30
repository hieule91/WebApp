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
    .controller('registrationCtrl', function () {

      var vm = this;
      this.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS'
      ];

      vm.userName = '';
      vm.password = '';

      vm.submit = function () {
        $location.path('/homePage');
      };
    });

})();
