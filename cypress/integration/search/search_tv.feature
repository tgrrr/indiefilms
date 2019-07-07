Feature: TV Show Search

  @focus
  Scenario: TV search
    Given I visit the homepage
    When I search for a TV show
    Then I get the results for that TV show {string}
