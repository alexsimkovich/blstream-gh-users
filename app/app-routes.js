(function () {
  'use strict';

  angular
    .module('githubUsers')
    .config(config);

  function config($urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
  }
}());
