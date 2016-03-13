(function () {
  'use strict';

  /**
   * @ngdoc service
   * @name userProfile.factory:UserProfile
   *
   * @description
   *
   */
  angular
    .module('userProfile')
    .factory('getUserInfo', getUserInfo);

  function getUserInfo($http, $stateParams, $q) {
    var userInfo = {};

    userInfo.userDetails = function userDetails () {
      var deferred = $q.defer();

      $http.get('//api.github.com/users/' + $stateParams.username)
        .success(function(data) {
          // The promise is resolved once the HTTP call is successful.
          deferred.resolve(data);
        })
        .error(function() {
          // The promise is rejected if there is an error with the HTTP call.
          deferred.reject();
        });

      // The promise is returned to the caller
      return deferred.promise;
    };

    return userInfo;
  }
}());
