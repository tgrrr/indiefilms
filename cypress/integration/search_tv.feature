@focus
Feature: A user can search for TV shows
  In order to keep a list of TV shows I want to watch
  As a user
  I want to be able to search the moviedb for TV shows
  It search for a TV show

  Scenario Outline: 
    When I search for the TV show <searchTerm>
    Then I get the <searchResult> for that TV show
    And I get the <year>

     Examples:
       | searchTerm | searchResult | year |
       | Stranger | Stranger Things  | 2016 |
       | Rick | Rick and Morty | 2013 |

# TODO: for other api results. Eg.
# - [ ] For each TV show in the search results, display
# - [ ] The title
# - [ ] The year that the show first aired
# - [ ] The average rating (as a percentage)
# - [ ] The show’s language
# - [ ] The show’s poster image
