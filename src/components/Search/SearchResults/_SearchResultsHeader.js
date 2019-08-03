import React from 'react';
import { Col, Row } from '../../../common/styles';
import SearchResultsHeaderStyled from './_SearchResultsHeaderStyled';

const headerTitles = [
  'Image',
  'Title',
  'Year',
  'Rating',
  'Language',
  'Add to Watchlist',
];

const SearchResultsHeader = () => (
  <SearchResultsHeaderStyled>
    <Row p={3}>
      {headerTitles.map(title => <Col key={title}>{title}</Col>)}
    </Row>
  </SearchResultsHeaderStyled>
);

export default SearchResultsHeader;
