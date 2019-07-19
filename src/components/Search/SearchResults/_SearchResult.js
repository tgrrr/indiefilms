import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from '../../../common/styles';
import {
  formatYear,
  formatRating,
  formatLanguage,
} from '../../../utils';

/* eslint-disable camelcase */
const SearchResults = ({
  children,
  first_air_date,
  original_language,
  original_name,
  vote_average,
}) => (
  <Row
    className='SearchResults__item'
    data-testid='SearchResults__item'
    p={3}
  >
    <Col>
      {children}
    </Col>
    <Col>
      <span
        className='SearchResults__item--title'
        data-testid='SearchResults__item--title'
      >
        {original_name}
      </span>
    </Col>
    <Col>
      <span
        className='SearchResults__item--year'
        data-testid='SearchResults__item--year'
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
/* eslint-enable camelcase */

SearchResults.propTypes = {
  children: PropTypes.object.isRequired,
  first_air_date: PropTypes.string.isRequired,
  original_language: PropTypes.string.isRequired,
  original_name: PropTypes.string.isRequired,
  vote_average: PropTypes.number.isRequired,
};

SearchResults.defaultProps = {};

export default SearchResults;
