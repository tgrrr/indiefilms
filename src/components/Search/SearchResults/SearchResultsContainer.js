import React, { useState } from 'react';
import useFetchSearch from '../../../services/api/useFetchSearch';
import SearchResults from './SearchResults';

const SearchResultsContainer = () => {
  const [searchTerm] = useState('Rick');

  const movieDbResults = useFetchSearch(searchTerm);

  return movieDbResults
    && <SearchResults
      movieDbResults={movieDbResults}
    />;
};

export default SearchResultsContainer;
