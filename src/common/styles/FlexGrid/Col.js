import styled from 'styled-components';
import { space, width } from 'styled-system';

const Col = styled.div`
  ${space}
  ${width}
  flex-basis: 100%;

  @media screen and (min-width: 800px) {
    .column {
      flex: 1;
    }
  }
`;

export default Col;
