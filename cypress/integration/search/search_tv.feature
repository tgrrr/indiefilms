Feature: TV Show Search

# -----------------------------------------------------------------------------
# Main test:
# -----------------------------------------------------------------------------

  @focus @e2e
  Scenario: Search TV
    Given I visit the homepage
    When I search for a TV show
    Then I get the results for that TV show {string}

# -----------------------------------------------------------------------------
# Sub tests:
# -----------------------------------------------------------------------------

  @focus @stubbed
  Scenario: Search TV SearchResults Generate Stubbed API
    Given I get search Results
    Then It generates a fixture file stubbed API

  @stubbed
  Scenario: Search TV SearchResults
    Given I get search Results
    When I search for a TV show
    Then I get a Title
    And I get a Year
    And I get a Rating
    And I get a Language

  @todo
  Scenario: TV Show SearchResults Loading Placeholder
    Given I visit the homepage
    When I search for a TV show
    Then I get a loading placeholder

  # Cover Images treated separately
  @todo
  Scenario: TV Show SearchResults Image
    Given I get search Results
    When I search for a TV show
    Then I get an image placeholder
    Then I get the image for that
