(function () {
  'use strict';

  /* @ngdoc object
   * @name githubUsers
   * @description
   *
   */
  angular
    .module('githubUsers', [
      'ui.router',
      'ui.bootstrap',
      'ngAnimate',
      'home',
      'usersList',
      'userProfile'
    ]);
}());
