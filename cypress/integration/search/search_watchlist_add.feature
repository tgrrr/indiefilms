  Feature: add to watchlist
    In order to watch TV shows later
    As a user
    I want to be able to add shows to a watchlist
  
  Scenario: 
    Given I visit "/search"
    When I click 'add'
    Then A TV show is added to my watchlist
