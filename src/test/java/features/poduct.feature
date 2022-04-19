Feature: Products

  Background: open the Application
    Given I have opened the swag labs application in browser
    When I enter username "standard_user" and password "secret_sauce"
    And I click on the login Button
    Then I should be Landed on the products page

	@sanity
  Scenario: Compare product pricing
    When I landed on the products page
    Then product prices should be as below
      | Sauce Labs Backpack   | $29.99 |
      | Sauce Labs Bike Light | $9.99  |

	@sanity
  Scenario: Compare product wrong pricing
    When I landed on the products page
    Then product prices should be as below
      | Sauce Labs Bolt T-Shirt | $18.99 |
