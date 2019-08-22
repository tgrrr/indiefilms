import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// LATER: adjust size for media queries
/* eslint-disable camelcase */
// docs: https://developers.themoviedb.org/3/configuration/get-api-configuration
const Image = ({ background_path, name, poster_path }) => {
  const IMAGE_PATH = 'https://image.tmdb.org/t/p/';
  const IMAGE_SIZE = 'w185';

  const imageVersions = background_path || poster_path;

  return (
    <SearchResultImageWrapper>
      {imageVersions
        ? (
          <img
            alt={name}
            className='SearchResult__item--image'
            data-testid='SearchResult__item--image'
            src={`${IMAGE_PATH}${IMAGE_SIZE}${imageVersions}`}
          />
        ) : <>{name}</>}
    </SearchResultImageWrapper>
  );
};

const SearchResultImageWrapper = styled.div`
  width: 200px;
  padding: 0 10px 0 0 ;
`;


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
