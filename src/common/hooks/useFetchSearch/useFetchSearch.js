import { useEffect, useState } from 'react';
import axios from 'axios';
import fetchSearch from '../../../services/api/fetchSearch';

const useFetchSearch = (searchTerm) => {
  const [searchResults, setSearchResults] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    let isSubscribed = true;
    const { CancelToken } = axios;
    const source = CancelToken.source();

    fetchSearch(searchTerm, source, error)
      .then(results => (isSubscribed ? setSearchResults(results) : null))
      .catch(error => (isSubscribed ? setError(error.toString()) : null));

    return () => {
      source.cancel('Effect cleared');
      isSubscribed = false;
    };
  }, [error, searchTerm, setError, setSearchResults]);

  return searchResults;
};

export default useFetchSearch;
