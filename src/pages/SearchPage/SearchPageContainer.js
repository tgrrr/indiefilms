import React, { useState } from 'react';
import useFetchSearch from '../../services/api/useFetchSearch';
import SearchPage from './SearchPage';

const SearchPageContainer = () => {
  const [searchTerm, setSearchTerm] = useState('Rick');
  const movieDbResults = useFetchSearch(searchTerm);

  return (
    movieDbResults
      ? <SearchPage
        movieDbResults={movieDbResults}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      : <>loading</>
  );
};

export default SearchPageContainer;
