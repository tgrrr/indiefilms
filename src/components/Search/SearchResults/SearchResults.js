import React from 'react';
import PropTypes from 'prop-types';
import { Col, Grid, Row } from '../../../common/styles';
import {
  formatYear,
  formatRating,
  formatLanguage,
} from '../../../utils';
import Image from './_Image';

/* eslint-disable camelcase */
const SearchResults = ({ movieDbResults }) => (
  <Grid>
    <strong>
      <Row p={3}>
        <Col>Image</Col>
        <Col>Title</Col>
        <Col>Year</Col>
        <Col>Rating</Col>
        <Col>Language</Col>
        {/* <Col>Watchlist</Col> */}
      </Row>
    </strong>
    <div
      className='SearchResults__items'
      data-testid='SearchResults__items'
    >
      {movieDbResults.map((tvshow) => {
        const {
          background_path,
          first_air_date,
          id,
          original_language,
          original_name,
          poster_path,
          vote_average,
        } = tvshow;

        return (
          <Row
            className = 'SearchResults__item'
            data-testid = 'SearchResults__item'
            key = {id}
            p = {3}
          >
            <Col>
              <Image
                background_path = {background_path}
                original_name = {original_name}
                poster_path = {poster_path}
              />
            </Col>
            <Col>
              <span
                className = 'SearchResults__item--title'
                data-testid = 'SearchResults__item--title'
              >
                {original_name}
              </span>
            </Col>
            <Col>
              <span
                className = 'SearchResults__item--year'
                data-testid = 'SearchResults__item--year'
              >
                {formatYear(first_air_date)}
              </span>
            </Col>
            <Col>
              <span
                className='SearchResults__item--rating'
                data-testid='SearchResults__item--rating'
              >
                {formatRating(vote_average)}
              </span>%
            </Col>
            <Col>
              <span
                className='SearchResults__item--language'
                data-testid='SearchResults__item--language'
              >
                {formatLanguage(original_language)}
              </span>
            </Col>
            {/* TODO: WATCHLIST ADD/REMOVE <Col>[ + add ] [ - remove ]</Col> */}
          </Row>
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
