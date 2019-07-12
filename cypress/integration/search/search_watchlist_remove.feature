  Feature: remove from watchlist
    In order to cull the TV shows I want to watch later
    As a user
    I want to be able to remove shows to a watchlist
  
  Scenario Outline: 
    Given I visit "/search"
    When I click 'remove'
    Then A TV show is removed from my watchlist
