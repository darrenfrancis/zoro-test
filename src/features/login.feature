Feature: As a user I can log in to my account

  Background:
    Given I open the login page

  Scenario: Successfully log in
    When I attempt to login with the username "test150420@gmail.com" and password "9999999"
    Then I am logged in

  # Maybe change the Then step? ^^^

  Scenario: Attempting to login in with invalid credentials
    When I attempt to login with the username "jhhfhgfg@gmaijhggjhl.com" and password "1111111111"
    Then I am not logged in
