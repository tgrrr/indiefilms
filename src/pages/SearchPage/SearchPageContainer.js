import React from 'react';
import SearchPage from './SearchPage';
import useFetchSearch from '../../services/api/useFetchSearch';

const SearchPageContainer = () => {
  // TODO: move to search component
  const searchTerm = 'Stranger Things'

  const movieDbResults = useFetchSearch(searchTerm);

  return <SearchPage movieDbResults={movieDbResults} />;
}

export default SearchPageContainer;
