import React from 'react';
import { Col, Row } from '../../../common/styles';
import SearchResultsHeaderStyled from './_SearchResultsHeaderStyled';

const headerTitles = [
  'Title',
  'Year',
  'Rating',
  'Language',
  'Watchlist',
];

const SearchResultsHeader = () => (
  <SearchResultsHeaderStyled>
    <Row p={3}>
      <Col key='image'>
        <div className='SearchResultsHeader--image-placeholder' />
      </Col>
      {headerTitles.map(title => <Col key={title}>{title}</Col>)}
    </Row>
  </SearchResultsHeaderStyled>
);

export default SearchResultsHeader;
