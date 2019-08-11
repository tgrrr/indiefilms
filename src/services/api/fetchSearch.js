import axios from 'axios';
import setAxiosDefaults from './setAxiosDefaults';

// TODO: pagination
// TODO: display friendly error to user

async function fetchSearch(searchTerm, source) {
  setAxiosDefaults();

  /* eslint-disable camelcase */
  const params = {
    api_key: process.env.REACT_APP_MOVIEDB_API_KEY,
    query: searchTerm,
    language: 'en-US',
    page: 1,
    cancelToken: source.token,
  };
  /* eslint-enable camelcase */

  const request = () => axios.get('tv', { params });

  return request(searchTerm)
    .then(res => res.data.results)
    // eslint-disable-next-line
    .catch(error => console.log('error: ', error));
}

export default fetchSearch;
