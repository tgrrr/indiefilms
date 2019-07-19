import React from 'react';
import PropTypes from 'prop-types';
import SearchResultsContainer
  from '../../components/Search/SearchResults/SearchResultsContainer';

const SearchPage = ({ movieDbResults }) => (
  <div
    className='SearchPage'
    data-testid='SearchPage'
  >
    <SearchResultsContainer movieDbResults={movieDbResults} />
  </div>
);

SearchPage.propTypes = {
  movieDbResults: PropTypes.array.isRequired,
  searchTerm: PropTypes.string.isRequired,
  setSearchTerm: PropTypes.func.isRequired,
};

export default SearchPage;
