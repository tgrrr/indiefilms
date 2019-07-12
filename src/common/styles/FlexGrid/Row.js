import styled from 'styled-components';
import { space, width } from 'styled-system';

const Row = styled.div`
  ${space}
  ${width}
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  @media screen and (min-width: 800px) {
    flex-wrap: nowrap;
  }
`;

export default Row;
