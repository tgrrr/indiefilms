import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchSearch = searchTerm => {
  const [searchResults, setSearchResults] = useState(null);

  useEffect(() => {
    // TODO: refactor
    const url = `https://api.themoviedb.org/3/search/tv?query=${searchTerm}&api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}`

    const request = () => axios.get(url);
    request(searchTerm)
      .then(res => setSearchResults(res.data.results))
      .catch(error => console.log('error: ', error));
  }, [searchTerm]);

  return searchResults;
};

export default useFetchSearch;