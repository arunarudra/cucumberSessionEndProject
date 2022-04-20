Feature: This feature would be used to check the login functionality

  Background: open the Application
    Given I have opened the swag labs application in browser
	
  Scenario Outline: Validate the successful Login
    When I enter username "<username>" and password "<password>"
    And I click on the login Button
    Then I should be Landed on the products page

    Examples: 
      | username      | password     |
      | standard_user | secret_sauce |
	@regression
  Scenario Outline: Validate login functionality with multiple data
    When I enter username "<username>" and password "<password>"
    And I click on the login Button
    Then I should be Landed on the products page

    Examples: 
      | username        | password     |
      | locked_out_user | secret_sauce |
      | problem_user    | secret_sauce |

	@regression
  Scenario Outline: Validate the Negative Login
    When I enter username "<username>" and password "<password>"
    And I click on the login Button
    Then I should get the error message "Epic sadface: Username and password do not match any user in this service"
    
    Examples: 
      | username        | password     |
      | standard_user | secret_sauce123 |
      
    
