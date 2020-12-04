import ShopPage from '../pageObjects/Shop_Page.js'

const { Then } = require('cucumber');


Then(
    /^I am logged in$/, function() {
        expect(ShopPage.hasSuccessfullyLoggedIn()).toEqual(true);
    }
);

Then(
    /^I am not logged in$/, function() {
        expect(ShopPage.hasSuccessfullyLoggedIn()).toEqual(false);
    }
);

