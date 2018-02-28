$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/NavigationBarSearch.feature");
formatter.feature({
  "name": "Search Functionality in Navigation Bar Search",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Filter"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Successful search on different pages",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@AcceptanceTest"
    }
  ]
});
formatter.step({
  "name": "I navigate to \"\u003cpages\u003e\" page on URL \"\u003cpagesURLs\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "I click on search in navigation bar",
  "keyword": "When "
});
formatter.step({
  "name": "I fill in search bar in navigation bar with \"\u003csearchTerm\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I press enter",
  "keyword": "And "
});
formatter.step({
  "name": "I\u0027m now on URL contains \"sony.com/search?query\u003d\u003csearchTerm\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "All results should be valid",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "pages",
        "pagesURLs",
        "searchTerm"
      ]
    },
    {
      "cells": [
        "Sony Home",
        "https://www.sony.com/",
        "phone"
      ]
    },
    {
      "cells": [
        "Sony PlayStation",
        "https://www.sony.com/electronics/playstation",
        "joystick"
      ]
    },
    {
      "cells": [
        "Sony Support",
        "https://esupport.sony.com/",
        "help"
      ]
    },
    {
      "cells": [
        "Sony Community",
        "https://community.sony.com/",
        "bravia"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Successful search on different pages",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Filter"
    },
    {
      "name": "@AcceptanceTest"
    }
  ]
});
formatter.step({
  "name": "I navigate to \"Sony Home\" page on URL \"https://www.sony.com/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "StepsCommon.i_navigate_to_page_on_URL(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on search in navigation bar",
  "keyword": "When "
});
formatter.match({
  "location": "StepsCommon.i_click_search_in_nav_bar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I fill in search bar in navigation bar with \"phone\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepsCommon.i_fill_in_search_bar_in_navbar_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I press enter",
  "keyword": "And "
});
formatter.match({
  "location": "StepsCommon.i_press_enter()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I\u0027m now on URL contains \"sony.com/search?query\u003dphone\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsCommon.i_am_on_url_contains(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "All results should be valid",
  "keyword": "And "
});
formatter.match({
  "location": "SearchResultPageSteps.result_valid()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Successful search on different pages",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Filter"
    },
    {
      "name": "@AcceptanceTest"
    }
  ]
});
formatter.step({
  "name": "I navigate to \"Sony PlayStation\" page on URL \"https://www.sony.com/electronics/playstation\"",
  "keyword": "Given "
});
formatter.match({
  "location": "StepsCommon.i_navigate_to_page_on_URL(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on search in navigation bar",
  "keyword": "When "
});
formatter.match({
  "location": "StepsCommon.i_click_search_in_nav_bar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I fill in search bar in navigation bar with \"joystick\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepsCommon.i_fill_in_search_bar_in_navbar_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I press enter",
  "keyword": "And "
});
formatter.match({
  "location": "StepsCommon.i_press_enter()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I\u0027m now on URL contains \"sony.com/search?query\u003djoystick\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsCommon.i_am_on_url_contains(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "All results should be valid",
  "keyword": "And "
});
formatter.match({
  "location": "SearchResultPageSteps.result_valid()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Successful search on different pages",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Filter"
    },
    {
      "name": "@AcceptanceTest"
    }
  ]
});
formatter.step({
  "name": "I navigate to \"Sony Support\" page on URL \"https://esupport.sony.com/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "StepsCommon.i_navigate_to_page_on_URL(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on search in navigation bar",
  "keyword": "When "
});
formatter.match({
  "location": "StepsCommon.i_click_search_in_nav_bar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I fill in search bar in navigation bar with \"help\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepsCommon.i_fill_in_search_bar_in_navbar_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I press enter",
  "keyword": "And "
});
formatter.match({
  "location": "StepsCommon.i_press_enter()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I\u0027m now on URL contains \"sony.com/search?query\u003dhelp\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsCommon.i_am_on_url_contains(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "All results should be valid",
  "keyword": "And "
});
formatter.match({
  "location": "SearchResultPageSteps.result_valid()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Successful search on different pages",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Filter"
    },
    {
      "name": "@AcceptanceTest"
    }
  ]
});
formatter.step({
  "name": "I navigate to \"Sony Community\" page on URL \"https://community.sony.com/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "StepsCommon.i_navigate_to_page_on_URL(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on search in navigation bar",
  "keyword": "When "
});
formatter.match({
  "location": "StepsCommon.i_click_search_in_nav_bar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I fill in search bar in navigation bar with \"bravia\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepsCommon.i_fill_in_search_bar_in_navbar_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I press enter",
  "keyword": "And "
});
formatter.match({
  "location": "StepsCommon.i_press_enter()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I\u0027m now on URL contains \"sony.com/search?query\u003dbravia\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsCommon.i_am_on_url_contains(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "All results should be valid",
  "keyword": "And "
});
formatter.match({
  "location": "SearchResultPageSteps.result_valid()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resources/features/SearchResultPageSearch.feature");
formatter.feature({
  "name": "Search Functionality in Search Result Page",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Filter"
    }
  ]
});
formatter.background({
  "name": "User navigates to Sony search page",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I navigate to \"Sony Search\" page on URL \"https://www.sony.com/search?query\u003d\"",
  "keyword": "Given "
});
formatter.match({
  "location": "StepsCommon.i_navigate_to_page_on_URL(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see \"Search Results | Sony US\" title",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsCommon.i_should_see_title(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see \"Search\" button",
  "keyword": "And "
});
formatter.match({
  "location": "StepsCommon.i_should_see_button(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search with a valid search term",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Filter"
    },
    {
      "name": "@AcceptanceTest"
    }
  ]
});
formatter.step({
  "name": "I fill in search with \"television\"",
  "keyword": "When "
});
formatter.match({
  "location": "SearchResultPageSteps.i_fill_in_searchBar_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \"Search\" button",
  "keyword": "And "
});
formatter.match({
  "location": "StepsCommon.i_click_button(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see results more than zero",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchResultPageSteps.i_should_see_message()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "All results should be valid",
  "keyword": "And "
});
formatter.match({
  "location": "SearchResultPageSteps.result_valid()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "User navigates to Sony search page",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I navigate to \"Sony Search\" page on URL \"https://www.sony.com/search?query\u003d\"",
  "keyword": "Given "
});
formatter.match({
  "location": "StepsCommon.i_navigate_to_page_on_URL(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see \"Search Results | Sony US\" title",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsCommon.i_should_see_title(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see \"Search\" button",
  "keyword": "And "
});
formatter.match({
  "location": "StepsCommon.i_should_see_button(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Meaningless search term with zero result",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Filter"
    },
    {
      "name": "@AcceptanceTest"
    }
  ]
});
formatter.step({
  "name": "I fill in search with \"asdfghjkl\"",
  "keyword": "When "
});
formatter.match({
  "location": "SearchResultPageSteps.i_fill_in_searchBar_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \"Search\" button",
  "keyword": "And "
});
formatter.match({
  "location": "StepsCommon.i_click_button(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see \"Your search for \"asdfghjkl\" returned 0 results\" zero message",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchResultPageSteps.i_should_see_zero_result(String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "User navigates to Sony search page",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I navigate to \"Sony Search\" page on URL \"https://www.sony.com/search?query\u003d\"",
  "keyword": "Given "
});
formatter.match({
  "location": "StepsCommon.i_navigate_to_page_on_URL(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see \"Search Results | Sony US\" title",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsCommon.i_should_see_title(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see \"Search\" button",
  "keyword": "And "
});
formatter.match({
  "location": "StepsCommon.i_should_see_button(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Load More Results",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Filter"
    },
    {
      "name": "@AcceptanceTest"
    }
  ]
});
formatter.step({
  "name": "I fill in search with \"mobile phone\"",
  "keyword": "When "
});
formatter.match({
  "location": "SearchResultPageSteps.i_fill_in_searchBar_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \"Search\" button",
  "keyword": "And "
});
formatter.match({
  "location": "StepsCommon.i_click_button(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see \"Load More\" button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsCommon.i_should_see_button(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \"Load More\" button",
  "keyword": "When "
});
formatter.match({
  "location": "StepsCommon.i_click_button(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Results count shown in current page should be increased",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchResultPageSteps.results_count_should_be_increased()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "User navigates to Sony search page",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I navigate to \"Sony Search\" page on URL \"https://www.sony.com/search?query\u003d\"",
  "keyword": "Given "
});
formatter.match({
  "location": "StepsCommon.i_navigate_to_page_on_URL(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see \"Search Results | Sony US\" title",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsCommon.i_should_see_title(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see \"Search\" button",
  "keyword": "And "
});
formatter.match({
  "location": "StepsCommon.i_should_see_button(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Filtering the results",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Filter"
    },
    {
      "name": "@AcceptanceTest"
    }
  ]
});
formatter.step({
  "name": "I fill in search with \"headphone\"",
  "keyword": "When "
});
formatter.match({
  "location": "SearchResultPageSteps.i_fill_in_searchBar_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \"Search\" button",
  "keyword": "And "
});
formatter.match({
  "location": "StepsCommon.i_click_button(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "All filters should be valid",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchResultPageSteps.filter_valid()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see filters working properly by clicking on them",
  "keyword": "And "
});
formatter.match({
  "location": "SearchResultPageSteps.i_click_filters()"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: Element \u003cspan class\u003d\"label label-close fi fonticon-10-circle-x--after\"\u003e...\u003c/span\u003e is not clickable at point (1141, 304). Other element would receive the click: \u003cdiv class\u003d\"acsModalBackdrop acsAbandonButton\" data-isbackdrop\u003d\"true\"\u003e...\u003c/div\u003e\n  (Session info: chrome\u003d64.0.3282.186)\n  (Driver info: chromedriver\u003d2.35.528161 (5b82f2d2aae0ca24b877009200ced9065a772e73),platform\u003dWindows NT 6.3.9600 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.9.1\u0027, revision: \u002763f7b50\u0027, time: \u00272018-02-07T22:25:02.294Z\u0027\nSystem info: host: \u0027LEOPAR\u0027, ip: \u0027192.168.1.246\u0027, os.name: \u0027Windows Server 2012 R2\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_141\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.35.528161 (5b82f2d2aae0ca..., userDataDir: C:\\Users\\JMETER\\AppData\\Loc...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 64.0.3282.186, webStorageEnabled: true}\nSession ID: ae4a1167311873e3427f2414ec767089\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:160)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:601)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:279)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:83)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy16.click(Unknown Source)\r\n\tat com.sony.framework.page.actions.ActionsCommon.click(ActionsCommon.java:18)\r\n\tat com.sony.framework.page.actions.SearchResultPageActions.narrowDown(SearchResultPageActions.java:67)\r\n\tat com.sony.test.stepDefinitions.SearchResultPageSteps.i_click_filters(SearchResultPageSteps.java:66)\r\n\tat ✽.I should see filters working properly by clicking on them(src/test/resources/features/SearchResultPageSearch.feature:35)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "name": "Search in search page by two different actions",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@AcceptanceTest"
    }
  ]
});
formatter.step({
  "name": "I fill in search with \"mobile phone\"",
  "keyword": "When "
});
formatter.step({
  "name": "I perform search by \"\u003caction\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I should see results more than zero",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "action"
      ]
    },
    {
      "cells": [
        "CLICK_SEARCH"
      ]
    },
    {
      "cells": [
        "PRESS_ENTER"
      ]
    }
  ]
});
formatter.background({
  "name": "User navigates to Sony search page",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I navigate to \"Sony Search\" page on URL \"https://www.sony.com/search?query\u003d\"",
  "keyword": "Given "
});
formatter.match({
  "location": "StepsCommon.i_navigate_to_page_on_URL(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see \"Search Results | Sony US\" title",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsCommon.i_should_see_title(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see \"Search\" button",
  "keyword": "And "
});
formatter.match({
  "location": "StepsCommon.i_should_see_button(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search in search page by two different actions",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Filter"
    },
    {
      "name": "@AcceptanceTest"
    }
  ]
});
formatter.step({
  "name": "I fill in search with \"mobile phone\"",
  "keyword": "When "
});
formatter.match({
  "location": "SearchResultPageSteps.i_fill_in_searchBar_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I perform search by \"CLICK_SEARCH\"",
  "keyword": "And "
});
formatter.match({
  "location": "SearchResultPageSteps.i_perform_search(SearchActionType)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see results more than zero",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchResultPageSteps.i_should_see_message()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "User navigates to Sony search page",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I navigate to \"Sony Search\" page on URL \"https://www.sony.com/search?query\u003d\"",
  "keyword": "Given "
});
formatter.match({
  "location": "StepsCommon.i_navigate_to_page_on_URL(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see \"Search Results | Sony US\" title",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsCommon.i_should_see_title(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see \"Search\" button",
  "keyword": "And "
});
formatter.match({
  "location": "StepsCommon.i_should_see_button(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search in search page by two different actions",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Filter"
    },
    {
      "name": "@AcceptanceTest"
    }
  ]
});
formatter.step({
  "name": "I fill in search with \"mobile phone\"",
  "keyword": "When "
});
formatter.match({
  "location": "SearchResultPageSteps.i_fill_in_searchBar_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I perform search by \"PRESS_ENTER\"",
  "keyword": "And "
});
formatter.match({
  "location": "SearchResultPageSteps.i_perform_search(SearchActionType)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see results more than zero",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchResultPageSteps.i_should_see_message()"
});
formatter.result({
  "status": "passed"
});
});