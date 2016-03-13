/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('Testing a Controller that uses a Promise', function () {
  var $scope;
  var $q;
  var deferred;
  beforeEach(module('userProfile'));
  beforeEach(inject(function($controller, _$rootScope_, _$q_, getUserInfo) {
    $q = _$q_;
    $scope = _$rootScope_.$new();
    // We use the $q service to create a mock instance of defer
    deferred = _$q_.defer();

    // Use a Jasmine Spy to return the deferred promise
    spyOn(getUserInfo, 'userDetails').and.returnValue(deferred.promise);

    // Init the controller, passing our spy service instance
    $controller('UserProfileCtrl', {
      $scope: $scope,
      getUserInfo: getUserInfo
    });
  }));
  it('should resolve promise', function () {
    // Setup the data we wish to return for the .then function in the controller
    deferred.resolve([{ id: 1 }, { id: 2 }]);

    // We have to call apply for this to work
    $scope.$apply();
    // Since we called apply, now we can perform our assertions
    expect($scope.user).not.toBe(undefined);
    expect($scope.error).toBe(undefined);
  });

  it('should reject promise', function () {
    // This will call the .catch function in the controller
    deferred.reject();

    // We have to call apply for this to work
    $scope.$apply();
    // Since we called apply, now we can perform our assertions
    expect($scope.user).toBe(undefined);
    expect($scope.error).toBe('There has been an error!');
  });
});
