/* global describe, beforeEach, it, browser */
'use strict';

var chai = require('chai')
  , chaiAsPromised = require('chai-as-promised')
  , expect = chai.expect
  , UserProfilePagePo = require('./user-profile.po');

chai.use(chaiAsPromised);

describe('User profile page', function () {
  var userProfilePage;

  beforeEach(function () {
    userProfilePage = new UserProfilePagePo();
    browser.get('/#/user-profile');
  });

  it('should say UserProfileCtrl', function () {
    expect(userProfilePage.heading.getText()).to.eventually.equal('userProfile');
    expect(userProfilePage.text.getText()).to.eventually.equal('UserProfileCtrl');
  });
});
