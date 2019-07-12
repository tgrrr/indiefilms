import { useState, useEffect } from 'react';
import axios from 'axios';
import setAxiosDefaults from './setAxiosDefaults';

// TODO: pagination
// TODO: display friendly error to user

const useFetchSearch = (searchTerm) => {
  const [searchResults, setSearchResults] = useState(null);

  useEffect(() => {
    setAxiosDefaults();

    /* eslint-disable camelcase */
    const params = {
      api_key: process.env.REACT_APP_MOVIEDB_API_KEY,
      query: searchTerm,
      language: 'en-US',
      page: 1,
    };
    /* eslint-enable camelcase */

    const request = () => axios.get('tv', { params });
    request(searchTerm)
      .then(res => setSearchResults(res.data.results))
      // eslint-disable-next-line
      .catch(error => console.log('error: ', error));
  }, [searchTerm]);

  return searchResults;
};

export default useFetchSearch;
