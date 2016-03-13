(function () {
  'use strict';

  angular
    .module('usersList')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('users', {
        url: '/users',
        templateUrl: 'users-list/users-list.tpl.html',
        controller: 'UsersListCtrl'
      });

  }
}());
