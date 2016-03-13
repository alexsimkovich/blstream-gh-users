(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name userProfile.controller:UserProfileCtrl
   * @requires $scope
   *
   * @description
   *
   */
  angular
    .module('userProfile')
    .controller('UserProfileCtrl', UserProfileCtrl);

  function UserProfileCtrl($scope, getUserInfo) {
    getUserInfo.userDetails()
      .then(function(data) {
        // This is set when the promise is resolved.
        $scope.user = data;
      })
      .catch(function() {
        // This is set in the event of an error.
        $scope.error = 'There has been an error!';
      });
  }
}());
