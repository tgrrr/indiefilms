import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '../../../common/styles';
import Image from './_Image';
import SearchResult from './_SearchResult';
import SearchResultsHeader from './_SearchResultsHeader';

/* eslint-disable camelcase */
const SearchResults = ({ movieDbResults }) => (
  <Grid>
    <SearchResultsHeader />
    <div
      className='SearchResults__items'
      data-testid='SearchResults__items'
    >
      {movieDbResults.map((tvshow) => {
        const {
          background_path,
          id,
          original_name,
          poster_path,
          ...rest
        } = tvshow;

        return (
          <SearchResult
            key={id}
            original_name={original_name}
            {...rest}
          >
            <Image
              background_path={background_path}
              original_name={original_name}
              poster_path={poster_path}
            />
          </SearchResult>
        );
      })}
    </div>
  </Grid>
);
/* eslint-enable camelcase */

SearchResults.propTypes = {
  movieDbResults: PropTypes.array,
};

SearchResults.defaultProps = {
  movieDbResults: [],
};

export default SearchResults;
