Feature: Global State

    Scenario: Reload page maintains results
        Given I visit the homepage
        When I reload the homepage
        Then The state persists
