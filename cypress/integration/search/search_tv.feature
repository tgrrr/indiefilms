Feature: TV Show Search

# -----------------------------------------------------------------------------
# Main test:
# -----------------------------------------------------------------------------

  @focus
  Scenario: Search TV
    Given I visit the homepage
    When I search for a TV show
    Then I get the results for that TV show {string}

# -----------------------------------------------------------------------------
# Sub tests:
# -----------------------------------------------------------------------------

  Scenario: TV Show SearchResults Placeholder
    Given I visit the homepage
    When I search for a TV show
    Then I get a loading placeholder

  @focus
  Scenario: Search TV details
    Given I get search Results
    When I search for a TV show
    Then I get a Title
    And I get a Year
    And I get a Rating
    And I get a Language