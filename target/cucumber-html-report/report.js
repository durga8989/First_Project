$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/features/search.feature");
formatter.feature({
  "name": "Search for Vegetables",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Login and search for vegetables",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SeleniumTest"
    }
  ]
});
formatter.step({
  "name": "user is on GreenKart landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitionSearch.user_is_on_greenkart_landing_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user search for \"Cucumber\" vegetable",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitionSearch.user_search_for_something_vegetable(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"Cucumber\" result is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitionSearch.something_result_is_displayed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Login and search for vegetables",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SeleniumTest"
    }
  ]
});
formatter.step({
  "name": "user is on GreenKart landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitionSearch.user_is_on_greenkart_landing_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user search for \"Brinjal\" vegetable",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitionSearch.user_search_for_something_vegetable(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Added more of the same item to cart",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitionSearch.added_more_of_the_same_item_to_cart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "proceeds to checkout",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitionSearch.proceeds_to_checkout()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify if \"Brinjal\" result is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitionSearch.verify_if_something_result_is_displayed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});