import React from 'react';
import { Col, Row } from '../../../common/styles';

const SearchResultsHeader = () => (
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
);

export default SearchResultsHeader;
