$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/login.feature");
formatter.feature({
  "name": "This feature would be used to check the login functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Validate login functionality with multiple data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "I enter username \"\u003cusername\u003e\" and password \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "I click on the login Button",
  "keyword": "And "
});
formatter.step({
  "name": "I should be Landed on the products page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "locked_out_user",
        "secret_sauce"
      ]
    },
    {
      "cells": [
        "problem_user",
        "secret_sauce"
      ]
    }
  ]
});
formatter.background({
  "name": "open the Application",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have opened the swag labs application in browser",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepsSauceDemo.i_have_opened_the_swag_labs_application_in_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate login functionality with multiple data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "I enter username \"locked_out_user\" and password \"secret_sauce\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepsSauceDemo.i_enter_username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the login Button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepsSauceDemo.i_click_on_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be Landed on the products page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepsSauceDemo.i_should_be_landed_on_the_products_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "open the Application",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have opened the swag labs application in browser",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepsSauceDemo.i_have_opened_the_swag_labs_application_in_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate login functionality with multiple data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "I enter username \"problem_user\" and password \"secret_sauce\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepsSauceDemo.i_enter_username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the login Button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepsSauceDemo.i_click_on_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be Landed on the products page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepsSauceDemo.i_should_be_landed_on_the_products_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Validate the Negative Login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "I enter username \"\u003cusername\u003e\" and password \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "I click on the login Button",
  "keyword": "And "
});
formatter.step({
  "name": "I should get the error message \"Epic sadface: Username and password do not match any user in this service\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce123"
      ]
    }
  ]
});
formatter.background({
  "name": "open the Application",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have opened the swag labs application in browser",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepsSauceDemo.i_have_opened_the_swag_labs_application_in_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the Negative Login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "I enter username \"standard_user\" and password \"secret_sauce123\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepsSauceDemo.i_enter_username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the login Button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepsSauceDemo.i_click_on_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get the error message \"Epic sadface: Username and password do not match any user in this service\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepsSauceDemo.i_should_get_the_error_message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/java/features/poduct.feature");
formatter.feature({
  "name": "Products",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "open the Application",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have opened the swag labs application in browser",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepsSauceDemo.i_have_opened_the_swag_labs_application_in_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter username \"standard_user\" and password \"secret_sauce\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepsSauceDemo.i_enter_username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the login Button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepsSauceDemo.i_click_on_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be Landed on the products page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepsSauceDemo.i_should_be_landed_on_the_products_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Compare product pricing",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "name": "I landed on the products page",
  "keyword": "When "
});
formatter.match({
  "location": "Products.i_landed_on_the_products_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "product prices should be as below",
  "rows": [
    {
      "cells": [
        "Sauce Labs Backpack",
        "$29.99"
      ]
    },
    {
      "cells": [
        "Sauce Labs Bike Light",
        "$9.99"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Products.product_prices_should_be_as_below(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "open the Application",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have opened the swag labs application in browser",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepsSauceDemo.i_have_opened_the_swag_labs_application_in_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter username \"standard_user\" and password \"secret_sauce\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepsSauceDemo.i_enter_username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the login Button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepsSauceDemo.i_click_on_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be Landed on the products page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepsSauceDemo.i_should_be_landed_on_the_products_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Compare product wrong pricing",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "name": "I landed on the products page",
  "keyword": "When "
});
formatter.match({
  "location": "Products.i_landed_on_the_products_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "product prices should be as below",
  "rows": [
    {
      "cells": [
        "Sauce Labs Bolt T-Shirt",
        "$18.99"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Products.product_prices_should_be_as_below(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});