import Page from './Page';

class LoginPage extends Page {

  /*********************/
  /***** Selectors *****/
  /*********************/

  get usernameInput()   { return $('input[name="email"]'); }
  get passwordInput()   { return $('input[name="password"]'); }
  get loginButton()     { return $('button.loginButtonContainer__btn'); }
  
  /*********************/
  /****** Methods ******/
  /*********************/

  /* Open the page */
  open () {
    super.open('login');
    //browser.pause(3000);
  }

  

  /* Login */
  login (username, password) {
    //this.waitForloginPageToLoad();
    this.usernameInput.setValue(username);
    this.passwordInput.setValue(password);
    this.loginButton.click();
    browser.pause(5000);
  }
}

export default new LoginPage();