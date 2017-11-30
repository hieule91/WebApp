'use strict';

/**
 * @ngdoc function
 * @name uDirtyRatWebApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the uDirtyRatWebApp
 */
angular.module('uDirtyRatWebApp')
  .controller('MainCtrl', function ($scope, $location) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    var vm = this;

    vm.userName = "";
    vm.password = "";

    var name = ["user", "username", "Justin", "Jack"];
    var pass = ["pass", "password"];

    $scope.$watch(function () {
        return vm.userName;
    }, function (newVal) {
        console.log("User Name");
        console.log(vm.userName);
    });


    $scope.$watch(function () {
      return vm.password;
    }, function (newVal) {
      console.log("Password");
      console.log(vm.password);
    });


    //Function save to Database
    vm.logIn = function () {
      var i;
      for (i = 0; i < name.length; i++) {
        if (vm.userName === name[i] && vm.password === pass[i]) {
          $location.path('/homePage');
        }
      }
    };

    vm.register = function () {
      $location.path('/registration');
    };

    vm.submit = function () {
      $location.path('/homePage');
    };

  });
