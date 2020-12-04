import LoginPage from '../pageObjects/LoginPage.page.js' 

const { When } = require('cucumber');

When(/^I attempt to login with the username "([^"]*)?" and password "([^"]*)?"$/, function(username, password) {
  LoginPage.login(username, password);
});
