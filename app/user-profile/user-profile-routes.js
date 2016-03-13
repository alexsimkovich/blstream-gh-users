(function () {
  'use strict';

  angular
    .module('userProfile')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('userProfile', {
        url: '/users/:username',
        templateUrl: 'user-profile/user-profile.tpl.html',
        controller: 'UserProfileCtrl'
      });
  }
}());
