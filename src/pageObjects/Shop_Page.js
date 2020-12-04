import Page from './Page';

class ShopPage extends Page {

  /*********************/
  /***** Selectors *****/
  /*********************/

  get loginSuccessToast()   { return $('.Toastify__toast--success'); }
  
  /*********************/
  /****** Methods ******/
  /*********************/

  /* Open the page */
  open () {
    super.open('login');
    //browser.pause(3000);
  }

  hasSuccessfullyLoggedIn() {
    return this.loginSuccessToast.isDisplayed()
  }

}

export default new ShopPage();