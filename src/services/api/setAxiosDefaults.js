import axios from 'axios';

export default function setAxiosHeaders() {
  axios.defaults.baseURL = process.env.REACT_APP_MOVIEDB_ROOT_URL;
}
