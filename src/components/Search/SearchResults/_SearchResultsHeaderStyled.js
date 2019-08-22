import styled from 'styled-components';

// TODO: responsive media queries
const SearchResultsHeaderStyled = styled.div`
  font-weight: bold;
  background-color: #282c34;
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
  z-index: 100;

  .SearchResultsHeader--image-placeholder {
    width: 210px;
  }
  
  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export default SearchResultsHeaderStyled;
