(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name usersList.controller:UsersListCtrl
   * @requires $scope
   *
   * @description
   *
   */
  angular
    .module('usersList')
    .controller('UsersListCtrl', UsersListCtrl);

  function UsersListCtrl($scope, getUserList) {
    var id = 0;
    $scope.changeList = function () {
      if ($scope.id_query > 0) {
        id = $scope.id_query;
        getUserList.getUsers(id)
          .then(function (data) {
            // This is set when the promise is resolved.
            $scope.users = data;
          })
          .catch(function () {
            // This is set in the event of an error.
            $scope.error = 'There has been an error!';
          });
      }
    };
    getUserList.getUsers(id)
      .then(function (data) {
        // This is set when the promise is resolved.
        $scope.users = data;
      })
      .catch(function () {
        // This is set in the event of an error.
        $scope.error = 'There has been an error!';
      });
  }
}());
