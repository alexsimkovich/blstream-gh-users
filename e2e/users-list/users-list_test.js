/* global describe, beforeEach, it, browser */
'use strict';

var chai = require('chai')
  , chaiAsPromised = require('chai-as-promised')
  , expect = chai.expect
  , UsersListPagePo = require('./users-list.po');

chai.use(chaiAsPromised);

describe('Users list page', function () {
  var usersListPage;

  beforeEach(function () {
    usersListPage = new UsersListPagePo();
    browser.get('/#/users-list');
  });

  it('should say UsersListCtrl', function () {
    expect(usersListPage.heading.getText()).to.eventually.equal('usersList');
    expect(usersListPage.text.getText()).to.eventually.equal('UsersListCtrl');
  });
});
