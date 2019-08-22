import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from '../../../common/styles';
import {
  formatYear,
  formatRating,
  formatLanguage,
} from '../../../utils';

// Layout Component for SearchResult
/* eslint-disable camelcase */
const SearchResult = ({
  image,
  first_air_date,
  original_language,
  original_name,
  watchListButton,
  vote_average,
}) => (
  <Row
    className='SearchResult__item'
    data-testid='SearchResult__item'
    p={3}
  >
    <Col>
      <span
        className='SearchResult__item--image'
        data-testid='SearchResult__item--image'
      >
        {image}
      </span>
    </Col>
    <Col>
      <span
        className='SearchResult__item--title'
        data-testid='SearchResult__item--title'
      >
        {original_name}
      </span>
    </Col>
    <Col>
      <span
        className='SearchResult__item--year'
        data-testid='SearchResult__item--year'
      >
        {formatYear(first_air_date)}
      </span>
    </Col>
    <Col>
      <span
        className='SearchResult__item--rating'
        data-testid='SearchResult__item--rating'
      >
        {formatRating(vote_average)}
      </span>%
    </Col>
    <Col>
      <span
        className='SearchResult__item--language'
        data-testid='SearchResult__item--language'
      >
        {formatLanguage(original_language)}
      </span>
    </Col>
    <Col>
      <span
        className='SearchResult__item--button'
        data-testid='SearchResult__item--button'
      >
        {watchListButton}
      </span>
    </Col>
  </Row>
);
/* eslint-enable camelcase */

SearchResult.propTypes = {
  first_air_date: PropTypes.string,
  image: PropTypes.object.isRequired,
  original_language: PropTypes.string.isRequired,
  original_name: PropTypes.string.isRequired,
  vote_average: PropTypes.number.isRequired,
  watchListButton: PropTypes.object.isRequired,
};

SearchResult.defaultProps = {
  first_air_date: null,
};

export default SearchResult;
