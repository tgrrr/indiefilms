import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '../../../common/styles';
import Image from './_Image';
import SearchResult from './_SearchResult';
import SearchResultsHeader from './_SearchResultsHeader';
import WatchlistButtonContainer from
  '../../WatchlistButton/WatchlistButtonContainer';

/* eslint-disable camelcase */
const SearchResults = ({
  movieDbResults,
}) => (
  <Grid>
    <SearchResultsHeader />
    <div
      className='SearchResults__items'
      data-testid='SearchResults__items'
    >
      {movieDbResults.map(({
        background_path,
        id,
        name,
        poster_path,
        ...rest
      }) => (
        <SearchResult
          image={
            <Image
              background_path={background_path}
              name={name}
              poster_path={poster_path}
            />
          }
          key={id}
          name={name}
          watchListButton={<WatchlistButtonContainer id={id} />}
          {...rest}
        />
      ))}
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
