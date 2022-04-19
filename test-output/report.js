$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/poduct.feature");
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