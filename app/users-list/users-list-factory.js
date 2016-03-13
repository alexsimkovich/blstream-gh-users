(function () {
  'use strict';

  /**
   * @ngdoc service
   * @name usersList.factory:UsersList
   *
   * @description
   *
   */
  angular
    .module('usersList')
    .factory('getUserList', getUserList);

  function getUserList($http, $q) {
    var users = {};

    users.getUsers = function getUsers (id) {
      var deferred = $q.defer();
      $http.get('https://api.github.com/users' + (id > 0 ? '?since=' + id : ''))
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

    return users;
  }
}());
