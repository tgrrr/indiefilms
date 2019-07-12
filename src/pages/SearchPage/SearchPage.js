import React from 'react';
import PropTypes from 'prop-types';
import SearchResults from '../../components/Search/SearchResults/SearchResults';

const SearchPage = ({movieDbResults}) => (
  <div 
    className='SearchPage' 
    data-testid='SearchPage'
  >
    <SearchResults movieDbResults={movieDbResults} />
  </div>
);

SearchPage.propTypes = {
  movieDbResults: PropTypes.array.isRequired,
  searchTerm: PropTypes.string.isRequired,
  setSearchTerm: PropTypes.func.isRequired,
};

export default SearchPage;
