import React from 'react';
import PropTypes from 'prop-types';

// LATER: adjust size for media queries
/* eslint-disable camelcase */
// docs: https://developers.themoviedb.org/3/configuration/get-api-configuration
const Image = ({ background_path, name, poster_path }) => {
  const IMAGE_PATH = 'https://image.tmdb.org/t/p/';
  const IMAGE_SIZE = 'w185';

  const imageVersions = background_path || poster_path;

  return (
    imageVersions
      ? (
        <img
          alt={name}
          className='SearchResults__item--image'
          data-testid='SearchResults__item--image'
          src={`${IMAGE_PATH}${IMAGE_SIZE}${imageVersions}`}
        />
      ) : <>{name}</>
  );
};

Image.propTypes = {
  background_path: PropTypes.string,
  name: PropTypes.string.isRequired,
  poster_path: PropTypes.string,
};

Image.defaultProps = {
  background_path: '',
  poster_path: '',
};
/* eslint-enable camelcase */

export default Image;
