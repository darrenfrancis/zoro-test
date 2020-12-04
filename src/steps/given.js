import LoginPage from '../pageObjects/LoginPage.page.js'

import { Given } from 'cucumber';

Given(/^I open the login page$/, function() {
    LoginPage.open();
})